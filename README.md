# COVID MAPFLIX
- 국가별 인기 OTT컨텐츠와 장르를 클릭 한번으로 쉽게 알아보세요!

## 실행 영상
https://user-images.githubusercontent.com/82202370/147452681-0afdd898-6fc1-4c68-8165-02a3cf5e94b0.mp4


## 프로젝트 구성 안내

## 1. 프로젝트 소개
01. 사용할 데이터 세트
  - 국가별 코로나 확진자 API
  - 넷플릭스 크롤링 데이터 (제목, 장르, 서비스하는 국가, 포스터 등)
  - 국가별 넷플릭스 가입자/구독자 데이터
  - 세계지도 API
  - IMDB API

02. 기술스택
  - python, d3, pandas, jupyter, google colab, MySQL, SQLAlchemy,  

03. 사용된 라이브러리
  - numpy, matplotlib, seaborn, scipy.interpolate, BeautifulSoup, Selenium
  - alembic, bcrypt, cffi, click, cryptography, dnspython, 
  email-validator, Flask, Flask-Logi, Flask-Migrate, Flask-SQLAlchemy, greenlet, idna, itsdangerous, Jinja2, Mako, MarkupSafe, pycparser, PyMySQL, python-dateutil, python-dotenv, python-editor, si, SQLAlchemy, Werkzeug
  - @emotion/react, @emotion/styled, @material-ui/core, @material-ui/icons, @mui-treasury/styles, @mui/material, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, bootstrap, d3-fetch, d3-scale, material-ui, navbar-react, react, react-bootstrap, react-dom, react-hover, react-icons, react-redux, react-router-dom, react-scripts, react-simple-maps, react-slick, react-svg-worldmap, react-tooltip, recharts, redux-devtools-extension, redux-logger, redux-saga, sass, semantic-ui-react, styled-components, web-vitals

04. 웹서비스에 대한 자세한 개요
  - 코로나 펜데믹이 세계적으로 늘어난 넷플릭스 이용량에 얼마나 영향을 미치는지에 대한 구체적인 수치를 확인한다.
  - 코로나이후 국가별 넷플릭스 컨텐츠의 순위를 보여주고 높은 순위에 주로 배치되는 장르를 수집하여 인기 장르와 코로나 확진자의 증감데이터가
  연관지어질 수 있을지를 분석한다.
  - 세계적으로 넷플릭스 구독자가 얼마나 늘었는지 한 눈에 볼 수 있고, 기간별 확진자와 그에 따른 인기 컨텐츠를 보여줌으로써 특정 장르의
  인기가 사람들의 코로나부터의 불안과 연관될 수 있을지 살핀다.


## 2. 프로젝트 목표

**데이터 분석 결과로 도출되는 인사이트와 웹서비스의 해결과제에 대한 논의 (50자 이상)**
  - 코로나 이후 사람들이 집에 있는 시간이 많아지면서 OTT서비스를 이용하는 이용자 수는 당연하게도 증가하였다. 그런데 이때, 우리는 어떤 장르의 영화를 볼까? 이에 대해 유추해봤을 때 일반적으로 재난영화나 스릴러영화를 찾을것이라고 예상한다. 아니면 반대로 평화로운 힐링물을 주로 찾게 될지고 모른다고 예상할 수도 있다. 우리는 이의 결과를 논리적으로 밝혀보기 위하여 이 서비스를 만들게되었다.
  - 정말 코로나 확진자의 증가와 특정 장르를 찾는 소비자들의 심리가 연관성이 있을것인가? 또한 국가별로 같은 현상이 나타날까? 등의 가설들을 증명해나갈 예정이다.


## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
- 주요 기능 
    1. 세계지도에서 hover시 최신날짜의 Top contents와 넷플릭스 구독자 추이 그래프 표시
    2. 세계지도를 클릭한 경우, 그 나라의 코로나 확진자 수에 비례하는 타임라인 출력
    3. 타임라인에 hover할 경우, 그 기간의 Top contents를 표시하고 클릭한 경우 체이지 하단에 자세한 내용 표시
- 서브 기능
    1. 세계적 코로나 확진자의 증가와 넷플릭스 구독자들의 증가에 대한 상관관계 분석
    2. 국가별 코로나 기간동안 넷플릭스 Top contents의 장르를 분석하여 가설을 검증한다. 
    3. 컨텐츠 랜덤 추천 서비스 (Dice Rec)
- 프로젝트만의 차별점, 기대 효과
    - 코로나 확진자 추세에 따라 선호되는 장르가 어떻게 변화하는지 시각적으로 알 수 있다. 
    - 

## 4. 프로젝트 구성도
- 와이어프레임<br>
https://whimsical.com/covidottservice-3MKi1hqB2Cs9fYiw1PESyr  <br>
https://www.figma.com/file/x2tCIwJwB8m6pIPcPJHqty/Elice-Ott-Service?node-id=0%3A1  
- 스토리보드  <br>
https://docs.google.com/presentation/d/1xD7ho-AjKyINq_XBUZdixww4CB0FyBQT/edit#slide=id.p6

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
|  남정윤   |   데이터분석, 팀장    |
|  이성효   |	백엔드, 프론트엔드  |  
|  윤석준   |	데이터분석, 백엔드  |
|  이선예   |	백엔드, 프론트엔드  |
|  김재현   |	데이터분석, 프론트엔드  |
|  김민지   |	백엔드   |   

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - 1.0

## 7. FAQ
  - 자주 받는 질문 정리


# React-Flask-App 개발환경 구축
[참고영상 링크](https://www.youtube.com/watch?v=cb1vy1HpVwk&t=3064s)

flask와 react 연동 성공

## [ 리액트 실행시키기 ]
1. 터미널에서 cd frontend
2. npm 사용하면 터미널에서 npm instal 후, npm start <br>
yarn 사용하면 터미널에서 yarn install 후, yarn start
3. 포트 5000번 실행되면서 Hello가 보이면 리액트 실행 성공

## [ 플라스크 서버 실행시키기 ]
1. 터미널에서 cd backend
2. 터미널에서 가상환경 실행시키기 <br>
 mac은 source .venv/bin/activate <br>   윈도우는 source .venv/source/activate
3. 맨 앞에 (venv)가 붙으면 가상환경 실행 성공
4. requirements.txt 설치하기<br>
mac은 pip3 install -r requirements.txt <br>윈도우는 pip install -r requirements.txt
5. 터미널에 pip3 list (또는 pip list) 했을 때 목록이 requirements.txt 내용과 같다면 성공
6. 터미널에서 python3 app.py(또는 python3 app.py) 했을 때 127.0.0.1 사이트 열리면 flask 서버 실행 성공

## [ 리액트와 플라스크 연결 확인하기 ]
1. 터미널 두개 열고 각각 리액트 실행, 플라스크 서버 실행
2. 리액트 실행으로 열린 페이지에서 /api url로 접속
3. 개발자 도구 열었을 때 콘솔에서 Object가 출력되면 연결 확인 성공

