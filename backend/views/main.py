from flask import Flask, Blueprint
from models import *

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/api', methods=['GET'])
def index():
    content = 'please work'
    test1 = TestModel(content)
    db.session.add(test1)
    db.session.commit()

    return {
        'fruits': ['apple', 'orange']
        }

