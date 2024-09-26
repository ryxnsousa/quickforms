from flask import Flask, request, redirect
import mysql.connector
from flask_sqlalchemy import SQLAlchemy
from settings import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://user_flask:senha1234@localhost/quickforms'
db = SQLAlchemy(app)

db_config = {
    'user': 'user_flask',
    'password': 'senha1234',
    'host': 'localhost',
    'database': 'quickforms',
}

from views import *

if __name__ == "__main__":
    app.run()