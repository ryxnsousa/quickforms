from settings import db

class User(db.Model):
    id = db.Collumn('id', db.Integer, primary_key=True, autoincrement=True)
    titulo = db.Column(db.string(200))
    desc = db.Column(db.Integer)

    def __init__(self, titulo, desc):
        self.titulo = titulo
        self.desc = desc
