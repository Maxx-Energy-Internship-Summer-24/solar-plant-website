from flask import Blueprint, request

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    data = request.json
    print(data)
    return "{% data %}"

@auth.route("/logout")
def logout():
    return "<h1>Logout</h1>"

@auth.route("/sign-up")
def sign_up():
    return "<h1>Sign Up</h1>"