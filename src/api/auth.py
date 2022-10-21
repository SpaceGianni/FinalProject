from flask import Blueprint, request, jsonify
from models import User
from werkzeug.security import generate_password_hash, check_password_hash # libreria para encriptar las contraseñas
from flask_jwt_extended import create_access_token, create_refresh_token
import datetime