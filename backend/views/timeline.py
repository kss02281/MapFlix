from flask import Flask, Blueprint, jsonify
from models import *

bp = Blueprint('timeline', __name__, url_prefix='/')


@bp.route('/timeline/<string:country_code>', methods=['GET'])
def get_confirmed_num(country_code):

    confirmed_list = db.session.query(CovidConfirmed).filter(
        CovidConfirmed.country_code == country_code).all()

    return jsonify([confirmed.serialize for confirmed in confirmed_list])
