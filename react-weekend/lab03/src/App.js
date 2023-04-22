import { Fragment } from "react";
import "./App.css";

/*
  함수형 컴포넌트
  함수형 컴포넌트에서 리턴하는 XML이 화면에 렌더링됨.
  class 요소는 className으로 써야함.
  </> 닫는 태그는 필수적으로 써줘야 함.
  import 이름 from 경로
  두 개 이상의 엘리먼트가 있을때는 <div></div>로 감싸줘야함.(하나의 엘리먼트일때는 생략 가능)
  리액트가 사용하는 가상 DOM은 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문이다.
  <div></div> 대신 <Fragment></Fragment> 사용하면 불필요한 div 생략 가능 (import 해줘야 함) 리액트 v16부터 사용 가능
  <Fragment></Fragment> 대신 <></>로 사용 가능
 */
function App() {
  const name = "홍길동"; // 주석은 JS주석처럼 사용 가능
  // 자바스크립트 표현식을 XML안에서 사용하려면 {} 이용.

  const name2 = "리액트.";

  const myStyle = {
    backgroundColor: "indianred",
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    padding: 16,
  };

  return (
    // <Fragment>
    <>
      <h1>Hello World</h1>
      <h2>안녕하세요. {name}님</h2>
      {/*
        JSX안에서 주석은 이렇게 사용 가능
       */}
      <div>
        {/* 조건식 ? 참일 때 값 : 거짓일 때 값 */}
        {name2 === "리액트" ? <span>React</span> : <span>Not React</span>}
      </div>
      {/*리액트는 null값을 화면에 렌더링하지 않음(false도 안함) */}
      <div>{name2 === "리액트" ? <span>React</span> : null}</div>
      {/* 
        조건이 참일 때만 렌더링하는 요소가 있고 조건이 거짓일 때 렌더링하는 요소가 없는 경우
        && : 왼쪽이 있는 식이 참인 경우 뒤에 식 출력, 왼쪽에 있는 식이 거짓일 경우 false
        || : 왼쪽이 있는 식이 거짓인 경우 뒤에 식 출력, 왼쪽에 있는 식이 참일 경우 false
       */}
      <div>{name2 === "리액트." && <span>React</span>}</div>
      {/* 
        inline style : JSX에서 태그 속성 값을 설정할 때 문자열만 따옴표를 사용하고
        그 이외의 값들은 표현식 {}를 사용
       */}
      <div
        style={{
          // 여기서 적는 내용은 javascript 객체를 써주면 됨.
          // CamelCase로 써줘야 함.
          color: "blue",
          backgroundColor: "orange",
          fontSize: 32, // 단위가 없는 경우 px이다.
          fontWeight: "bold",
        }}
      >
        {name}
      </div>
      <div style={myStyle}>{name}</div>
    </>
    // </Fragment>
  );
}

export default App;
