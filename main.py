from flask import Flask
from settings import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://user_flask:senha1234@localhost/quickforms'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    from views import * 

if __name__ == "__main__":
    app.run(debug=True)


from main import app
from models import db

with app.app_context():
    db.create_all()

