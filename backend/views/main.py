from flask import Flask, Blueprint, jsonify
from models import *
import random

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
    data = db.session.query(SubscribersByCountry).filter(
        SubscribersByCountry.country_code == country_code).first()

    return jsonify({'q1_subscribers': data.q1_subscribers, 'q2_subscribers': data.q2_subscribers})

# 국가별 가장 최신 주차(21년 40번째 주)의 1위 영화, tv쇼 불러오기


@bp.route('/netflix/<string:country_code>/2021-040/top1', methods=['GET'])
def get_netflix_top1(country_code):
    rank = 1

    top1_list = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == '2021-040', NetflixTop10.rank == rank).all()

    x = random.randint(1, 3)
    for content in top1_list:
        if (content.poster == '') or ('img' in content.poster):
            content.poster = f'../../frontend/src/img/{x}.png'
            db.session.commit()

    new_top1_list = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == '2021-040', NetflixTop10.rank == rank).all()

    return jsonify([top1.serialize2 for top1 in new_top1_list])

# 국가별 각 주차의 1위 영화, tv쇼 불러오기


@bp.route('/netflix/<string:country_code>/top1', methods=['GET'])
def get_netflix_top1_by_week(country_code):
    rank = 1

    week_list = db.session.query(NetflixTop10.week).filter(
        NetflixTop10.country_code == country_code).all()

    week_list = list(set([week[0] for week in week_list]))
    week_list.sort()

    # print(week_list)

    top1_list = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.rank == rank).all()

    x = random.randint(1, 3)
    for content in top1_list:
        if (content.poster == '') or ('img' in content.poster):
            content.poster = f'../../frontend/src/img/{x}.png'
            db.session.commit()

    new_top1_list = []

    for week in week_list:
        top1_contents = db.session.query(NetflixContent).join(NetflixTop10).\
            filter(NetflixTop10.country_code == country_code,
                   NetflixTop10.week == week, NetflixTop10.rank == rank).all()
        serialized = {week: [content.serialize2 for content in top1_contents]}
        new_top1_list.append(serialized)

    return jsonify(new_top1_list)


# 국가별 각 주차의 top10 영화리스트, tv쇼 리스트
@bp.route('/netflix/<string:country_code>/<string:week>/top10', methods=['GET'])
def get_netflix_top10(country_code, week):
    x = random.randint(1, 3)

    top10_movies = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code, NetflixTop10.week ==
               week, NetflixTop10.content_type == 'movies').all()

    for movie in top10_movies:
        if 'img' in movie.poster == '':
            movie.poster = f'../../frontend/src/img/{x}.png'
            db.session.commit()

    top10_tv_shows = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == week, NetflixTop10.content_type == 'tv').all()

    for tv in top10_tv_shows:
        if 'img' in tv.poster:
            tv.poster = f'../../frontend/src/img/{x}.png'
            db.session.commit()

    new_top10_movies = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code, NetflixTop10.week ==
               week, NetflixTop10.content_type == 'movies').all()

    new_top10_tv_shows = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == week, NetflixTop10.content_type == 'tv').all()

    return jsonify(
        {'movies': [movie.serialize2 for movie in new_top10_movies],
         'tv_shows': [tv.serialize2 for tv in new_top10_tv_shows]
         })

# 국가별 각 주차의 가장 인기있는 장르와 색상


@bp.route('/netflix/<string:country_code>/<string:week>/genre',  methods=['GET'])
def get_top_genre(country_code, week):
    if country_code == 'world':
        genre = db.session.query(WorldGenreScore).filter(
            WorldGenreScore.week == week).order_by(WorldGenreScore.score.desc()).first()

        return jsonify({'genre': genre.genre, 'color': genre.color})

    contents = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == week).all()

    genres = []
    for content in contents:
        genres = genres + content.serialize['genre']

    genres = [v for v in genres if v]
    print(genres)

    top_genre = genres[0]
    for genre in genres:
        if genres.count(top_genre) < genres.count(genre):
            top_genre = genre

    color = db.session.query(GenreColor).filter(
        GenreColor.genre == top_genre).first()

    return jsonify({'genre': top_genre, 'color': color.color})

# 국가별 각 주차의 장르 스코어


@bp.route('/netflix/<string:country_code>/<string:week>/genres',  methods=['GET'])
def get_genres_score(country_code, week):
    contents = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == week).all()

    genres = []
    for content in contents:
        genres = genres + content.serialize['genre']

    genres = [v for v in genres if v]
    genres_unique = list(set(genres))
    genres_unique.sort()

    result = []
    for genre in genres_unique:
        cnt = genres.count(genre)
        color = db.session.query(GenreColor).filter(
            GenreColor.genre == genre).first().color
        result.append({'genre': genre, 'score': cnt, 'color': color})

    print(result)
    return jsonify(result)

    # 전세계 통합 주차별 장르 스코어


@bp.route('/netflix/world/<string:week>/genres', methods=['GET'])
def get_world_genres_score(week):
    genres = db.session.query(WorldGenreScore).filter(
        WorldGenreScore.week == week).all()

    return jsonify([genre.serialize for genre in genres])

# 국가 주차의 1위 데이터


@bp.route('/netflix/<string:country_code>/<string:week>/top1', methods=['GET'])
def get_netflix_top1_by_week(country_code, week):
    rank = 1

    top1_list = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == week, NetflixTop10.rank == rank).all()

    x = random.randint(1, 3)
    for content in top1_list:
        if (content.poster == '') or ('img' in content.poster):
            content.poster = f'../../frontend/src/img/{x}.png'
            db.session.commit()

    new_top1_list = db.session.query(NetflixContent).join(NetflixTop10).\
        filter(NetflixTop10.country_code == country_code,
               NetflixTop10.week == week, NetflixTop10.rank == rank).all()

    return jsonify([top1.serialize2 for top1 in new_top1_list])
