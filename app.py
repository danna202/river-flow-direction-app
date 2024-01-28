import bcrypt
from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/us-river-flow'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data['email']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User signed up successfully'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Login failed'})
 
@app.route('/map')
def map():
    return render_template('map.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
# if __name__ == '__main__':
#     db.create_all()
    # app.run(debug=True)