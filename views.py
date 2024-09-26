from main import app
from flask import render_template, request, redirect, url_for
from models import db, Formulario

@app.route('/')
def hello():
    return render_template("index.html")

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        titulo = request.form['titulo']
        descricao = request.form['descricao']
        perguntas = ', '.join(request.form.getlist('pergunta'))
        novo_formulario = Formulario(titulo=titulo, descricao=descricao, perguntas=perguntas)
        db.session.add(novo_formulario)
        db.session.commit()
        return redirect(url_for('forms')) 
    return render_template("create.html")

@app.route('/forms')
def forms():
    formularios = Formulario.query.all()
    return render_template("forms.html", formularios=formularios)

@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    formulario = Formulario.query.get_or_404(id)
    if request.method == 'POST':
        data = request.get_json()
        formulario.titulo = data['titulo']
        formulario.descricao = data['descricao']
        formulario.perguntas = ', '.join([f"{q['texto']}|{q['tipo']}" for q in data['perguntas']])
        db.session.commit()
        return '', 204
    return render_template("edit.html", formulario=formulario)



@app.route('/delete/<int:id>')
def delete(id):
    formulario = Formulario.query.get_or_404(id)
    db.session.delete(formulario)
    db.session.commit()
    return redirect(url_for('forms'))
