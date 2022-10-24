from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash # libreria para encriptar las contraseñas
from flask_jwt_extended import create_access_token, create_refresh_token
import datetime


db = SQLAlchemy()

#Tabla de usuarios
class User(db.Model):
    __tablename__="users"
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    apellido = db.Column(db.String(120), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    tipo = db.Column(db.String(120), unique=False, nullable=False)
    active = db.Column(db.Boolean(), default=True)
    productos = db.relationship('Producto', cascade="all, delete", backref="user")
    pedidos = db.relationship('Pedido', cascade="all, delete", backref="user")
    cotizaciones = db.relationship('Cotizacion', cascade="all, delete", backref="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre" : self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "tipo" : self.tipo,
            "active" : self.active
            # do not serialize the password, its a security breach
        }
    
    def serialize_con_productos(self):
         return {
            "id": self.id,
            "nombre" : self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "tipo" : self.tipo,
            "active" : self.active,
            "productos" :  [producto.serialize() for producto in self.productos]
            # do not serialize the password, its a security breach
        }
    
    def serialize_con_cotizaciones(self):
         return {
            "id": self.id,
            "nombre" : self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "tipo" : self.tipo,
            "active": self.active,
            "cotizaciones" : [cotizacion.serialize() for cotizacion in self.cotizaciones]   
            # do not serialize the password, its a security breach
        }
    
    
    def serialize_con_productos_con_cotizaciones(self):
         return {
            "id": self.id,
            "nombre" : self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "tipo" : self.tipo,
            "active" : self.active,
            "productos" :  [producto.seralize() for producto in self.productos],
            "cotizaciones" : [cotizacion.serialize() for cotizacion in self.cotizaciones]
            # do not serialize the password, its a security breach
        }


    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

#Tabla de productos
class Producto(db.Model):
    __tablename__="productos"
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    precio = db.Column(db.Integer,nullable=False) 
    cantidad = db.Column(db.Integer,nullable=False) 
    fecha_publicacion = db.Column(db.DateTime(), nullable=False)
    descripcion = db.Column(db.String(200), nullable=False)
    urlImagen = db.Column(db.String(200), default="")
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    cotizaciones = db.relationship('Cotizacion', cascade="all, delete", backref="producto")
    pedidos = db.relationship('Pedido', cascade="all, delete", backref="producto")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre" : self.nombre,
            "precio": self.precio,
            "cantidad": self.cantidad,
            "fecha_publicacion" : self.fecha_publicacion,
            "descripcion" : self.descripcion,
            "urlImagen" : self.urlImagen,
            #"users_id" : self.user.id
            # do not serialize the password, its a security breach
        }
    
    def serialize_con_id_usuario(self):
        return {
            "id": self.id,
            "nombre" : self.nombre,
            "precio": self.precio,
            "cantidad": self.cantidad,
            "fecha_publicacion" : self.fecha_publicacion,
            "descripcion" : self.descripcion,
            "urlImagen" : self.urlImagen,
            #"users_id" : [user.seralize() for user in self.users]
            "users_id" : self.user.id
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

#Tabla de cotizaciones de compra
class Cotizacion(db.Model):
    __tablename__="cotizaciones"
    id = db.Column(db.Integer, primary_key=True)
    direccion = db.Column(db.String(300), nullable=False)
    region = db.Column(db.String(50), nullable=False)
    telefono = db.Column(db.String(120), nullable=False)
    productos_id = db.Column(db.Integer, db.ForeignKey('productos.id'), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
   
    def serialize(self):
        return {
            "id": self.id,
            "direccion": self.direccion,
            "region": self.region,
            "telefono" : self.telefono,  
        }
    
    def serialize_con_usuario_con_producto(self):
        return {
            "id": self.id,
            "direccion": self.direccion,
            "region": self.region,
            "telefono" : self.telefono,
            "producto" : self.producto.serialize(),
            "user" : self.user.serialize()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

#Tabla de pedidos del administrador
class Pedido(db.Model):
    __tablename__="pedidos"
    id = db.Column(db.Integer, primary_key=True)
    estatus = db.Column(db.Integer, nullable=False)
    fecha_pedido= db.Column(db.DateTime(), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    productos_id=db.Column(db.Integer, db.ForeignKey('productos.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "estatus": self.estatus,
            "fecha_pedido": self.fecha_pedido  
        }
    
    def serialize_con_user_con_precio(self):
        return {
            "id": self.id,
            "estatus": self.estatus,
            "fecha_pedido": self.fecha_pedido,
            "nombre_cliente": self.user.nombre,
            "email_cliente": self.user.email,
            "producto" : self.producto.nombre,
            "precio" : self.producto.precio
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

#Tabla de imágenes
class Gallery(db.Model):
    __tablename__ = 'galleries'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    filename = db.Column(db.String(200), nullable=False)
    active = db.Column(db.Boolean(), default=True)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "filename": self.filename,
            "active": self.active
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    

