from main import app
from flask import render_template
import mysql.connector

# rotas

@app.route('/')
def hello():
    return render_template("index.html")

@app.route('/create')
def create():
    return render_template("create.html")

@app.route('/forms')
def forms():
    return render_template("forms.html")
