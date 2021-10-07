from db_connect import db 

class TestModel(db.Model):
    __tablename__ = 'test'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=True)
    content = db.Column(db.String(240))

    def __init__(self, content):
        self.content = content