from config import db
from flask_login import UserMixin

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            "name": self.name,
            "email": self.email,
            "password": self.password,
        }

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    name = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    gender = db.Column(db.String(150))
    phone_number = db.Column(db.String(50))
    address = db.Column(db.String(150))
    occupation = db.Column(db.String(150))

    def to_json(self):
        return {
            'id': self.id,
            "name": self.name,
            "email": self.email,
            "password": self.password,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "gender": self.gender,
            "phoneNumber": self.phone_number,
            "address": self.address,
            "occupation": self.occupation
        }