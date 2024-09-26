from settings import db

class Formulario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
    descricao = db.Column(db.Text, nullable=False)
    perguntas = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'<Formulario {self.titulo}>'
