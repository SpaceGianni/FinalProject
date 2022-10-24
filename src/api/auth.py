from crypt import methods
from flask import Blueprint, request, jsonify
from models import User
from werkzeug.security import generate_password_hash, check_password_hash # libreria para encriptar las contraseñas
from flask_jwt_extended import create_access_token, create_refresh_token
import datetime

bpUsers = Blueprint('bpUsers', __name__)

@bpUsers.route('/registro', methods=['POST'])
def registrar_usuario():
    #capturo los tres elementos
    username=request.json.get('username')
    password=request.json.get('password')
    active=request.json.get('active', True)
    #valido el formulario
