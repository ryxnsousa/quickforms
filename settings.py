from dotenv import dotenv_values
from flask_sqlalchemy import SQLAlchemy

config = dotenv_values(".env")

db = SQLAlchemy()