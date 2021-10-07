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


