document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
}

function reset() {
  document.body.style.backgroundColor = 'rgb(221, 255, 249)'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는 데 사용하는 마크업 언어입니다.'
}

function showcss() {
  document.getElementById('fig').src = 'img/css3.jpg'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>은 HTML 문서의 스타일을 지정하기 위한 언어입니다.'
}

function showjs() {
  document.getElementById('fig').src = 'img/javascript.jpg'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 합니다.'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
