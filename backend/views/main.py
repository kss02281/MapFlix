from flask import Flask, Blueprint, jsonify
from models import *
import re
bp = Blueprint('main', __name__, url_prefix='/')

# 국가별로 전체 week 확진자 수 불러오기
@bp.route('/timeline/<string:country_code>', methods=['GET'])
def get_confirmed_num(country_code):

    confirmed_list = db.session.query(CovidConfirmed).filter(
        CovidConfirmed.country_code == country_code).all()

    return jsonify([confirmed.serialize for confirmed in confirmed_list])

# 국가별로 넷플릭스 구독자/매출 불러오기
@bp.route('/netflix/<string:country_code>', methods=['GET'])
def get_subscribers_num(country_code):
    data = db.session.query(SubscribersByCountry).filter(SubscribersByCountry.country_code == country_code).first()
    return jsonify({'q1_subscribers': data.q1_subscribers, 'q2_subscribers': data.q2_subscribers})

# 국가별 가장 최신 주차의 1위 영화, tv쇼 불러오기
@bp.route('/netflix/<string:country_code>/top1', methods=['GET'])
def get_netflix_top1(country_code):
    week = '2021-040'
    rank = 1

    top1_list = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code, NetflixTop10.week == week, NetflixTop10.rank == 1).all()

    return jsonify([top1.serialize for top1 in top1_list])

# 국가별 각 주차의 top10 영화리스트, tv쇼 리스트
@bp.route('/netflix/<string:country_code>/<string:week>/top10', methods=['GET'])
def get_netflix_top10(country_code, week):
    top10_movies = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code, NetflixTop10.week == week, NetflixTop10.content_type == 'movies').all()
    
    top10_tv_shows = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code, NetflixTop10.week == week, NetflixTop10.content_type == 'tv').all()
    
    return jsonify(
        {'movies': [movie.serialize2 for movie in top10_movies],
        'tv_shows': [tv.serialize2 for tv in top10_tv_shows]
        })

# 국가별 각 주차의 가장 인기있는 장르와 색상
@bp.route('/netflix/<string:country_code>/<string:week>/genre',  methods=['GET'])
def get_top_genre(country_code, week):
    contents = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code, NetflixTop10.week == week).all()

    genres = []
    for content in contents:
        for i in range(9):
            genres.append(content.serialize['genre'][i])
    genres = [v for v in genres if v]
    print(genres)
    
    top_genre = genres[0]
    for genre in genres:
        if genres.count(top_genre) < genres.count(genre):
            top_genre = genre
    
    color = db.session.query(GenreColor).filter(GenreColor.genre == top_genre).first()

    return jsonify({'genre': top_genre, 'color': color.color})


#분기별 넷플릭스 구독자 수 총합
@bp.route('/genreanalysis',  methods=['GET'])
def get_genre_analysis():
    data1 = db.session.query(SubscribersByCountry.q1_subscribers).all()
    datafix = []
    for i in data1:
        datafix.append(str(i).replace(",","").replace("(","").replace(")",""))
    newarr = []
    for i in datafix:
        newarr.append(int(i))
    q1_sum = 0
    for i in newarr:
        q1_sum += i
    print(q1_sum)

    data2 = db.session.query(SubscribersByCountry.q2_subscribers).all()
    datafix2 = []
    for i in data2:
        datafix2.append(str(i).replace(",","").replace("(","").replace(")",""))
    newarr2 = []
    for i in datafix2:
        newarr2.append(int(i))
    q2_sum = 0
    for i in newarr2:
        q2_sum += i
    print(q2_sum)
    
    return jsonify({'sum': [q1_sum, q2_sum]})


# 국가별로 전체 week 확진자 수 불러오기
@bp.route('/hello', methods=['GET'])
def get_confirmed_num_test():

    confirmed_list = db.session.query(CovidConfirmed).filter(
        CovidConfirmed.week).all()
    print(confirmed_list[1].week)
    
    confirm_week = 0
    return jsonify([confirmed.serialize for confirmed in confirmed_list])