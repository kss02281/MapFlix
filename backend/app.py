from flask import Flask
from db_connect import db
import config
from models import SubscribersByCountry
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config)

    db.init_app(app)

    from views import main
    app.register_blueprint(main.bp)

    app.secret_key = 'secret'
    # 시크릿 키는 추후 수정
    app.config['SESSION_TYPE'] = 'filesystem'

    with app.app_context():
        db.create_all()

    return app


if __name__ == '__main__':
    create_app().run(debug=True)
