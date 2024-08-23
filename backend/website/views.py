from flask import Blueprint, Flask

views = Blueprint('views', __name__)
app = Flask(__name__)

@views.route('/members')
def home():
    return {"members": ["Member1", "Member2", "Member3"]}