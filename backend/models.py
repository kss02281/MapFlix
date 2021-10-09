from db_connect import db 

# 국가코드, 국가명 
class Country(db.Model):
    __tablename__ = 'country'

    country_code = db.Column(db.String(240), primary_key=True, nullable=False)
    country = db.Column(db.String(240), nullable=False)

    def __init__(self, country_code, country):
        self.country_code = country_code
        self.country = country
    
    @property
    def serialize(self):
        return {
            'country_code': self.country_code,
            'country': self.country
        }

# 국가별 넷플릭스 구독자, 소득 
class SubscribersByCountry(db.Model):
    __tablename__ = 'netflix_subscribers_revenue_by_country'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    country_code = db.Column(db.String(240), db.ForeignKey('country.country_code'),nullable=True)
    q1_subscribers = db.Column(db.Integer)
    q1_revenue = db.Column(db.BigInteger)
    q2_subscribers = db.Column(db.Integer)
    q2_revenue = db.Column(db.BigInteger)

    def __init__(self, country_code, q1_subscribers, q1_revenue, q2_subscribers, q2_revenue):
        self.country_code = country_code
        self.q1_subscribers = q1_subscribers
        self.q1_revenue = q1_revenue
        self.q2_subscribers = q2_subscribers
        self.q2_revenue = q2_revenue

    @property
    def serialize(self):
        return {
            'country_code': self.country_code,
            'q1_subscribers': self.q1_subscribers,
            'q1_revenue': self.q1_revenue,
            'q2_subscribers': self.q2_subscribers,
            'q2_subscribers': self.q2_subscribers
        }

# 국가별/주차별 코로나 확진자
class CovidConfirmed(db.Model):
    __tablename__ = 'covid_confirmed'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    country_code = db.Column(db.String(240), db.ForeignKey('country.country_code'), nullable=False)
    week = db.Column(db.String(240))
    confirmed = db.Column(db.Integer)

    def __init__(self, country_code, week, confirmed):
        self.country_code = country_code 
        self.week = week
        self.confirmed = confirmed
    
    @property
    def serialize(self):
        return {
            'country_code': self.country_code,
            'week': self.week,
            'confirmed': self.confirmed
        }

# 넷플릭스 작품 
class NetflixContent(db.Model):
    __tablename__ = 'netflix_content'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    title = db.Column(db.String(240), nullable=False)
    content_type = db.Column(db.String(240), nullable=True)
    genre1 = db.Column(db.String(240), nullable=True)
    genre2 = db.Column(db.String(240), nullable=True)
    genre3 = db.Column(db.String(240), nullable=True)

    def __init__(self, title, content_type, genre1, genre2, genre3):
        self.title = title
        self.content_type = content_type
        self.genre1 = genre1
        self.genre2 = genre2
        self.genre3 = genre3
    
    @property
    def serialize(self):
        return {
            # 'id': self.id,
            'title': self.title,
            'content_typqe': self.content_type,
            'genre1': self.genre1,
            'genre2': self.genre2,
            'genre3': self.genre3
        }

# 국가별 넷플릭스 top10
