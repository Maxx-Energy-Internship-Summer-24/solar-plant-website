from config import db

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
