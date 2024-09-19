from flask import Blueprint, request, jsonify
from models import User
from werkzeug.security import generate_password_hash, check_password_hash
from config import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.json.get('email')
        password = request.json.get('password')

        user = User.query.filter_by(email=email).first()

        data = {
            "result": "",
            "user": {}
        }
        try:
            if user:
                if check_password_hash(user.password, password):
                    data['result'] = "success"
                    data['user'] = user.to_json()
                else:
                    data['result'] = "wrong password"
            else: 
                data['result'] = "no user found"
            return jsonify(data)
        except Exception as e:
            return jsonify({"message": str(e)}), 400   
    return "{% data %}"

@auth.route("/logout")
def logout():
    return "<h1>Logout</h1>"

@auth.route("/sign-up", methods=['POST'])
def sign_up():
    if request.method == 'POST':
        email = request.json.get("email")
        name = request.json.get("name")
        password = request.json.get("password")
        new_user = User(email=email, name=name, password=generate_password_hash(password))
        try:
            db.session.add(new_user)
            db.session.commit()
        except Exception as e:
            return jsonify({"message": str(e)}), 400

    return "<h1>Sign Up</h1>"