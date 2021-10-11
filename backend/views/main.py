from flask import Flask, Blueprint, jsonify
from models import *

bp = Blueprint('main', __name__, url_prefix='/')

# 국가별로 전체 week 확진자 수 불러오기


@bp.route('/timeline/<string:country_code>', methods=['GET'])
def get_confirmed_num(country_code):

    confirmed_list = db.session.query(CovidConfirmed).filter(
        CovidConfirmed.country_code == country_code).all()

    return jsonify([confirmed.serialize for confirmed in confirmed_list])

# 국가별로 넷플릭스 구독자/매출 불러오기


@bp.route('/netflix/<string:country_code>', methods=['Get'])
def get_subscribers_num(country_code):
    data = db.session.query(SubscribersByCountry).filter(
        SubscribersByCountry.country_code == country_code).first()

    print(data.q1_subscribers)

    return jsonify({'q1_subscribers': data.q1_subscribers, 'q2_subscribers': data.q2_subscribers})
