"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from api.models import db, User, Producto, Cotizacion, Pedido, Gallery
import cloudinary.uploader

api = Blueprint('api', __name__)

##USUARIOS
#Ruta para crear un usuario nuevo
@api.route('/users', methods=['POST'])
def crear_usuario():
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    email = request.json.get('email')
    password = request.json.get('password')
    tipo = request.json.get('tipo')
    active = request.json.get('active')

    usuario = User()
    usuario.nombre = nombre
    usuario.apellido = apellido
    usuario.email = email
    usuario.password = password
    usuario.tipo = tipo
    usuario.active = active

    usuario.save()
  
    return jsonify(usuario.serialize()), 200

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

#Ruta para ver todos los productos de un usuario específico
@api.route('/users/<int:id>/productos', methods=['GET'])
def traer_usuario_con_productos(id):
     user = User.query.get(id)
     return jsonify(user.serialize_con_productos()), 200

#Ruta para ver todas las cotizaciones de un usuario específico
@api.route('/users/<int:id>/cotizaciones', methods=['GET'])
def traer_usuario_con_cotizaciones(id):
     user = User.query.get(id)
     return jsonify(user.serialize_con_cotizaciones()), 200

#Ruta para ver todos los productos y las cotizaciones de un usuario específico
@api.route('/users/<int:id>/productos/cotizaciones', methods=['GET'])
def traer_usuario_con_productos_con_cotizaciones(id):
    user = User.query.get(id)
    return jsonify(user.serialize_con_productos_con_cotizaciones()), 200


##PRODUCTOS
#Ruta para agregar productos
@api.route('/productos', methods=['POST'])
def crear_producto():
    nombre = request.json.get('nombre')
    precio = request.json.get('precio')
    cantidad = request.json.get('cantidad')
    fecha_publicacion = request.json.get('fecha_publicacion')
    descripcion = request.json.get('descripcion')
    urlImagen = request.json.get('urlImagen')
    users_id = request.json.get('users_id')
      
    producto = Producto()
    producto.nombre = nombre
    producto.precio = precio
    producto.cantidad = cantidad
    producto.fecha_publicacion = fecha_publicacion 
    producto.descripcion = descripcion 
    producto.urlImagen = urlImagen
    producto.users_id = users_id

    producto.save()
  
    return jsonify(producto.serialize_con_id_usuario()), 200

#Ruta para editar productos
@api.route('/productos/<int:id>', methods=['PUT'])
def editar_producto(id):
    nombre = request.json.get('nombre')
    precio = request.json.get('precio')
    cantidad = request.json.get('cantidad')
    fecha_publicacion = request.json.get('fecha_publicacion')
    descripcion = request.json.get('descripcion')
    urlImagen = request.json.get(' urlImagen')
    
    producto = Producto.query.get(id)
    producto.nombre = nombre
    producto.precio = precio
    producto.cantidad = cantidad
    producto.fecha_publicacion = fecha_publicacion 
    producto.descripcion = descripcion 
    producto.urlImagen = urlImagen

    producto.update()
  
    return jsonify(producto.serialize()), 200

#Ruta para traer todos los productos
@api.route('/productos', methods=['GET'])
def traer_productos():
    productos = Producto.query.all()
    productos = list(map(lambda producto: producto.serialize(), productos))
    return jsonify(productos), 200

#Ruta para traer todos los productos indicando el id del usuario
@api.route('/productos/users', methods=['GET'])
def traer_productos_con_usuario():
    productos = Producto.query.all()
    productos = list(map(lambda producto: producto.serialize_con_id_usuario(), productos))
    return jsonify(productos), 200

#Ruta para borrar un producto
@api.route('/productos/<int:id>', methods=['DELETE'])
def borrar_producto(id):   
    producto = Producto.query.get(id)
    producto.delete()
    return jsonify({"mensaje": "producto eliminado"}), 200


##COTIZACIONES
#Ruta para crear una cotización
@api.route('/cotizaciones', methods=['POST'])
def crear_cotizacion():
    direccion = request.json.get('direccion')
    region = request.json.get('region')
    telefono = request.json.get('telefono')
    users_id = request.json.get('users_id')
    productos_id = request.json.get('productos_id')

    cotizaciones = Cotizacion ()
    cotizaciones.direccion = direccion,
    cotizaciones.region = region,
    cotizaciones.telefono = telefono
    cotizaciones.users_id = users_id
    cotizaciones.productos_id= productos_id

    cotizaciones.save()
    return jsonify(cotizaciones.serialize_con_usuario_con_producto()), 200

#Ruta para editar una cotización
@api.route('/cotizaciones/<int:id>', methods=['PUT'])
def editar_cotizacion(id):
    direccion = request.json.get('direccion')
    region = request.json.get('region')
    telefono = request.json.get('telefono')
    users_id = request.json.get('users_id'),
    productos_id= request.json.get('productos_id')

    cotizaciones = Cotizacion.query.get (id)
    cotizaciones.direccion = direccion,
    cotizaciones.region = region,
    cotizaciones.telefono = telefono,
    cotizaciones.users_id = users_id,
    cotizaciones.productos_id= productos_id

    cotizaciones.update()
    return jsonify(cotizaciones.serialize_con_usuario_con_producto()), 200

#Ruta para traer todas las cotizaciones
@api.route('/cotizaciones', methods=['GET'])
def traer_cotizaciones():
    cotizaciones= Cotizacion.query.all()
    cotizaciones = list(map(lambda cotizacion: cotizacion.serialize_con_usuario_con_producto(),cotizaciones))
    return jsonify(cotizaciones), 200

#Ruta para traer todas las cotizaciones con sus usuarios y sus productos
@api.route('/cotizaciones/usuarios', methods=['GET'])
def traer_cotizaciones_con_usuario_con_productos():
    cotizaciones= Cotizacion.query.all()
    cotizaciones = list(map(lambda cotizacion: cotizacion.serialize_con_usuario_con_producto(),cotizaciones))
    return jsonify(cotizaciones), 200

#Ruta para borrar una cotización
@api.route('/cotizaciones/<int:id>', methods=['DELETE'])
def borrar_cotizacion(id):
    cotizaciones = Cotizacion.query.get (id)
    cotizaciones.delete()
    return jsonify({"mensaje" : "cotización eliminada"}), 200

##PEDIDOS
#Ruta para crear pedidos
@api.route('/pedidos', methods=['POST'])
def crear_pedido():
    estatus = request.json.get('estatus')
    fecha_pedido= request.json.get('fecha_pedido')
    users_id = request.json.get('users_id')
    productos_id = request.json.get('productos_id')

    pedidos = Pedido ()
    pedidos.estatus = estatus
    pedidos.fecha_pedido = fecha_pedido
    pedidos.users_id = users_id
    pedidos.productos_id = productos_id

    pedidos.save()
    return jsonify(pedidos.serialize_con_user_con_precio()), 200

#Ruta para editar un pedido
@api.route('/pedidos/<int:id>', methods=['PUT'])
def editar_pedido(id):
    estatus = request.json.get('estatus')
    fecha_pedido= request.json.get('fecha_pedido')

    pedidos = Pedido.query.get (id)
    pedidos.estatus = estatus
    pedidos.fecha_pedido = fecha_pedido

    pedidos.update()
    return jsonify(pedidos.serialize()), 200

#Ruta para traer todos los pedidos
@api.route('/pedidos', methods=['GET'])
def traer_pedidos():
    pedidos= Pedido.query.all()
    pedidos = list(map(lambda pedido: pedido.serialize(), pedidos))
    return jsonify(pedidos), 200

#Ruta para traer todos los pedidos con el id del usuario que los encargó y con el precio de cada producto
@api.route('/pedidos/users', methods=['GET'])
def traer_pedidos_con_usuarios_con_precios():
    pedidos = Pedido.query.all()
    pedidos = list(map(lambda pedido: pedido.serialize_con_user_con_precio(), pedidos))
    return jsonify(pedidos), 200

#Ruta para borrar un pedido
@api.route('/pedidos/<int:id>', methods=['DELETE'])
def borrar_pedido(id):
    pedidos = Pedido.query.get (id)
    pedidos.delete()
    return jsonify({"mensaje": "pedido eliminado"}), 200

##GALERIA DE IMÁGENES
#Ruta para agregar una imagen
@api.route('/galleries', methods=['POST'])
def agregar_imagen():
    title = request.form['title']
    active = request.form['active']
    image = request.files['image']

    resp = cloudinary.uploader.upload(image, folder="gallery")

    if not resp: return jsonify({ "msg": "error al subir imagen"}), 400

    gallery_image = Gallery()
    gallery_image.title = title
    gallery_image.active = True if active == 'true' else False
    gallery_image.filename = resp['secure_url']
    gallery_image.save()

    return jsonify(gallery_image.serialize()), 200

#Ruta para editar una imagen
@api.route('/galleries/<int:id>', methods=['PUT'])
def editar_imagen(id):
        active = request.json.get('active')

        gallery_image = Gallery.query.get(id)
        gallery_image.active = active
        gallery_image.update()

        return jsonify(gallery_image.serialize()), 200

#Ruta para traer todas las imagenes activas y no activas
@api.route('/galleries', methods=['GET'])
def traer_galleries():
        #Posibilida el filtrado por medio del url
        active =  request.args.get('active')
        if active is not None:
          status = True if active == 'true' else False
          galleries = Gallery.query.filter_by(active=status)
          galleries = list(map(lambda imagen: imagen.serialize(), galleries))
          return jsonify(galleries), 200

        #Trae todos los resultados
        else:
          galleries = Gallery.query.all()
          galleries = list(map(lambda imagen: imagen.serialize(), galleries))
          return jsonify(galleries), 200

#Ruta para recoger el cambio de estado de las imágenes 
@api.route('/galleries/<int:id>', methods=['PUT'])
def recoger_cambio_estado(id):
    active = request.json.get('active')
    gallery_image = Gallery.query.get(id)
    gallery_image.active = active
    gallery_image.update()
    return jsonify(gallery_image.serialize()), 200



#Ruta para borrar una imagen
@api.route('/galleries/<int:id>', methods=['DELETE'])
def borrar_imagen(id):
        gallery_image = Gallery.query.get(id)
        gallery_image.delete()
        return jsonify({"mensaje": "imagen eliminada"}), 200
    







     
     
    







  