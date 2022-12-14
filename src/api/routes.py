"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from fileinput import filename
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from api.models import db, User, Articulo, Cotizacion
import cloudinary.uploader
from werkzeug.security import generate_password_hash, check_password_hash # libreria para encriptar las contraseñas
from flask_jwt_extended import create_access_token
import datetime
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

###USUARIOS
##REGISTER
#Ruta para crear un usuario nuevo (registro de usuarios)
@api.route('/users', methods=['POST'])
def crear_usuario():
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    email = request.json.get('email')
    password = request.json.get('password')
    tipo = request.json.get('tipo', 'cliente')
    active = request.json.get('active', True)

    #Valido el formulario
    ##Dejamos el email como username para el registro
    if not email: return jsonify({"status": "error", "code":400, "mensaje": "El email del usuario es requerido"}), 400
    if not password : return jsonify({"status": "error", "code": 400, "mensaje": "La contraseña es requerida"}), 400

    usuario = User()
    usuario.nombre = nombre
    usuario.apellido = apellido
    usuario.email = email
    usuario.password = generate_password_hash(password)
    usuario.tipo = tipo
    usuario.active = active

    usuario.save()

    data = {
        "usuario": usuario.serialize()
    }

    return jsonify({"status": "éxito","code":200, "mensaje": "usuario creado exitosamente", "data": data}), 200

##LOGGIN
#Ruta para el ingreso del usuario en su cuenta (log in)
@api.route('/ingreso', methods=['POST'])
def ingresar():
    email = request.json.get('email')
    password = request.json.get('password')

#Valido el formulario
    ##Dejamos el email como username para el registro
    if not email: return jsonify({"status": "error", "code":400, "mensaje": "El email del usuario es requerido"}), 400
    if not password : return jsonify({"status": "error", "code": 400, "mensaje": "La contraseña es requerida"}), 400

    usuario = User.query.filter_by(email=email, active=True).first()

#Valido si el usuario existe
    if not usuario : return jsonify({"status": "error", "code": 401, "mensaje": "El email o la contraseña está incorrecto"}), 400
#Valido si la contraseña ingresada coincide con la guardada
    if not check_password_hash(usuario.password, password) : return jsonify ({"status": "error", "code": 401, "mensaje": "El email o la contraseña está incorrecto"}), 400

    expires = datetime.timedelta(days=3)
    access_token = create_access_token(identity = usuario.id, expires_delta =expires)

    data = {
    "access_token" : access_token,
    "usuario": usuario.serialize()
}

    return jsonify({ "status": "éxito", "code": 200, "mensaje": "El usuario ha ingresado exitosamente", "data": data}), 200


#Ruta para editar un usuario
@api.route('/users/<int:id>', methods=['PUT'])
def editar_usuario(id):
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    email = request.json.get('email')
    password = request.json.get('password')
    tipo = request.json.get('tipo')
    active = request.json.get('active')

    usuario = User.query.get(id)
    usuario.nombre = nombre
    usuario.apellido = apellido
    usuario.email = email
    usuario.password = password
    usuario.tipo = tipo
    usuario.active = active

    usuario.update()
    return jsonify(usuario.serialize()), 200

#Ruta para traer un usuario específico
@api.route('/users/<int:id>', methods=['GET'])
def traer_usuario(id):
    usuario = User.query.get(id)
    return jsonify(usuario.serialize()), 200

#Ruta para traer todos los usuarios
@api.route('/users', methods=['GET'])
def traer_usuarios():
    users= User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200

#Ruta para borrar un usuario
@api.route('/users/<int:id>', methods=['DELETE'])
def borrar_usuario(id):
    usuario = User.query.get(id)
    usuario.delete()
    return jsonify({"mensaje": "usuario eliminado"}), 200

#Ruta para ver todas las cotizaciones de un usuario específico
@api.route('/users/<int:id>/cotizaciones', methods=['GET'])
def traer_usuario_con_cotizaciones(id):
     user = User.query.get(id)
     return jsonify(user.serialize_con_cotizaciones()), 200


###ARTICULOS
#Ruta para traer todos los artículos
@api.route('/articulos', methods=['GET'])
def traer_articulos():
    articulos= Articulo.query.all()
    articulos = list(map(lambda articulo: articulo.serialize(),articulos))
    return jsonify(articulos), 200

#Ruta para traer todos los artículos al usuario CLIENTE loggeado
@api.route('/login/articulos', methods=['GET'])
@jwt_required()
def traer_articulos_cliente():
    articulos= Articulo.query.all()
    articulos = list(map(lambda articulo: articulo.serialize(),articulos))
    return jsonify(articulos), 200

#Ruta para agregar un artículo
@api.route('/articulos', methods=['POST'])
def nuevo_articulo():
    nombre = request.form['nombre'] 
    precio = request.form['precio'] 
    descripcion = request.form['descripcion'] 
    imagen = request.files['imagen']
    active = request.form['active']
    fecha_publicacion = request.form['fecha_publicacion']

    resp = cloudinary.uploader.upload(imagen, folder="gallery")

    if not resp: return jsonify({ "msg": "error al subir imagen"}), 400
    print(resp)
    articulo = Articulo()
    articulo.nombre = nombre
    articulo.active = True if active == 'true' else False
    articulo.precio =precio
    articulo.descripcion = descripcion
    articulo.fecha_publicacion = fecha_publicacion
    articulo.imagen = resp['secure_url']

    articulo.save()

    return jsonify(articulo.serialize()), 200

#Ruta para traer un articulo específico
@api.route('/articulo/<int:id>', methods=['GET'])
def traer_producto(id):
    articulo = Articulo.query.get(id)
    return jsonify(articulo.serialize()), 200


#Ruta para editar un artículo
@api.route('/articulo/<int:id>', methods=['PUT'])
def editar_producto(id):
    nombre = request.form['nombre'] 
    precio = request.form['precio'] 
    descripcion = request.form['descripcion'] 
    imagen = request.files['imagen']
    active = request.form['active']
    fecha_publicacion = request.form['fecha_publicacion']
    
    articulo = Articulo.query.get(id)
    articulo.nombre = nombre
    articulo.precio = precio
    articulo.descripcion = descripcion
    articulo.imagen = imagen
    articulo.active=active
    acticulo.fecha_publicacion=fecha_publicacion

    articulo.update()
  
    return jsonify(articulo.serialize()), 200


#Ruta para borrar un articulo
@api.route('/articulo/<int:id>', methods=['DELETE'])
def borrar_articulo(id):   
    articulo = Articulo.query.get(id)
    articulo.delete()
    return jsonify({"mensaje": "articulo eliminado"}), 200


###COTIZACIONES
#Ruta para crear una cotización
@api.route('/cotizaciones', methods=['POST'])
def crear_cotizacion():
    direccion = request.json.get('direccion')
    region = request.json.get('region')
    telefono = request.json.get('telefono')
    users_id = request.json.get('users_id')
    articulo_id = request.json.get('articulo_id')

    cotizaciones = Cotizacion()
    cotizaciones.direccion = direccion
    cotizaciones.region = region
    cotizaciones.telefono = telefono
    cotizaciones.users_id = users_id
    cotizaciones.articulo_id = articulo_id
  
    cotizaciones.save()
    return jsonify(cotizaciones.serialize_con_usuario_con_articulo()), 200

#Ruta para editar una cotización
@api.route('/cotizaciones/<int:id>', methods=['PUT'])
def editar_cotizacion(id):
    direccion = request.json.get('direccion')
    region = request.json.get('region')
    telefono = request.json.get('telefono')
    user_id = request.json.get('user_id')
    articulo_id = request.json.get('articulo_id')
   
    cotizaciones = Cotizacion.query.get(id)
    cotizaciones.direccion = direccion,
    cotizaciones.region = region,
    cotizaciones.telefono = telefono,
    cotizaciones.user_id = user_id,
    cotizaciones.articulo_id = articulo_id
    
    cotizaciones.update()
    return jsonify(cotizaciones.serialize_con_usuario_con_articulo()), 200

#Ruta para traer todas las cotizaciones
@api.route('/cotizaciones', methods=['GET'])
def traer_cotizaciones():
    cotizaciones = Cotizacion.query.all()
    cotizaciones = list(map(lambda cotizacion: cotizacion.serialize_con_usuario_con_articulo(),cotizaciones))
    return jsonify(cotizaciones), 200

#Ruta para borrar una cotización
@api.route('/cotizaciones/<int:id>', methods=['DELETE'])
def borrar_cotizacion(id):
    cotizacion = Cotizacion.query.get (id)
    cotizacion.delete()
    return jsonify({"mensaje" : "cotización eliminada"}), 200

