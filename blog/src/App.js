/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // state에 데이터 저장하는 이유
  // state는 변경되면 HTML이 자동으로 재랜더링된다.
  // HTML이 새로고침 없이도 스무스하게 변경됨
  // 자주 바뀌는 중요한 데이터는 변수 말고 state로 저장해서 쓴다
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 마라탕 추천', '동작 맛집 추천']);
  let [배열, 배열변경] = useState(['강남 우동 맛집', '강남 떡볶이 맛집']);
  let [좋아요, 좋아요변경] = useState(0);

  let hello = '안녕하세요';
  let world = function() {
    return 'world';
  }
  let blue = { color : 'blue', fontSize : '30px'};

  let posts = '강남 고기 맛집';

  // <Array, Objecct state 데이터 수정 방법>
  // 일단 변경함수 써야 함
  // 변경함수 ( 대체할 데이터 )
  // 대체할 데이터는 직접 변경하지 말고 copy해서 수정해야 한다.
  function 제목바꾸기() {
    let copyArray = [...글제목];
    if (copyArray[0] === '남자 코트 추천') {
      copyArray[0] = '여자 코트 추천';
    } else {
      copyArray[0] = '남자 코트 추천';
    }
    글제목변경( copyArray );
  }

  function 정렬하기() { 
    let copyArray = [...글제목].sort();
    글제목변경( copyArray );
  }
  // return안에는 하나의 div만 가능
  return (
    <div className="App">
      <div className="black_nav">
        <div style={ blue }>개발 Blog</div>
      </div>
      <h4>{ hello }</h4>
      <h4>{ world() }</h4>
      <h4>{ posts }</h4>

      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요 + 1) }}>👍</span> { 좋아요 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <button onClick={ 제목바꾸기 }>제목바꾸기 버튼</button>
      <button onClick={ 정렬하기 }>정렬 버튼</button>

      <Modal/>
    </div>
  );
}

/*
  1. Component 첫 글자는 대문자
  2. return() 안에는 하나의 div로 묶어야 함
  3. div로 묶기 싫으면 <> </>로 묶으면 됨
 */
function Modal() {
  return (
    <>
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App;
