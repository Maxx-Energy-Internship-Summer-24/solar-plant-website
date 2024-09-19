from flask import request, jsonify
from config import app, db
from models import Contact, User
from auth import auth


app.register_blueprint(auth, url_prefix="/")

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})

@app.route("/update-info", methods=["PATCH", "POST"])
def update_info():
    data = request.json
    email = data.get("email")
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": email}), 404
    
    user.first_name = data.get("firstName", user.first_name)
    user.last_name = data.get("lastName", user.last_name)
    user.gender = data.get("gender", user.gender)
    user.phone_number = data.get("phoneNumber", user.phone_number)
    user.address = data.get("address", user.address)
    user.occupation = data.get("occupation", user.occupation)
    
    db.session.commit()

    return jsonify({"message": "User updated."}), 200

@app.route("/update_contact/<int:user_id>", methods=["PATCH"])
def update_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": "User not found"}), 404
    
    data = request.json
    contact.name = data.get("firstName", contact.name)
    contact.password = data.get("password", contact.password)
    contact.email = data.get("email", contact.email)

    db.sessions.commit()

    return jsonify({"message": "User updated."}), 200

@app.route("/delete_contact/<int:user_id>", methods=["DELETE"])
def delete_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": "User not found"}), 404
    
    db.session.delete(contact)
    db.session.commit()

    return jsonify({"message": "User deleted!"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)