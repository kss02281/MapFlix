import os

BASE_DIR = os.path.dirname(__file__)
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1234@localhost:3306/covid_mapflix'

# uri = mysql+pymysql://mysql_id/mysql_pw/localhost:3306/사용할 db 이름
SQLALCHEMY_TRACK_MODIFICATIONS = False
