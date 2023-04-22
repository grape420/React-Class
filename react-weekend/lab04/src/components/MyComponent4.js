import { Component } from "react";
import PropTypes from "prop-types";

/* 
  클래스형 컴포넌트 : React.Component 클래스를 상속하는 클래스를 선언
  render() : JSX를 리턴하는 메소드를 작성
  필요한 필드(멤버 변수), 메소드 등을 선언할 수 있음.
  부모 컴포넌트에서 전달받은 props는 생성자(constructor)를 작성할 때 부모 생성자 호출(super(props))
  부모 컴포넌트에서 전달받은 props는 Component 객체의 props 속성에 저장됨.
*/
class MyComponent4 extends Component {
  // Component 클래스의 props 객체를 상속 받음.
  // constructor(props) {
  //   super(props);
  // }

  // 기본값 설정하기 2
  static defaultProps = {
    name: "기본이름2",
  };

  // props 타입 체크 2
  static propTypes = {
    age: PropTypes.number,
  };

  // render 메소드 정의 - function 키워드를 사용하지 않음.
  render() {
    const { name, age, children } = this.props;
    return (
      <>
        <h1>MyComponent4 - Class Component</h1>
        <h2>{name}님 환영합니다.</h2>
        <h2>{age}세입니다.</h2>
        <h2>{children}</h2>
      </>
    );
  }
}

// 기본값 설정하기 1
// MyComponent4.defaultProps = {
//   name: "기본이름",
// };

// props 타입 체크 1
MyComponent4.propTypes = {
  name: PropTypes.string,
};

export default MyComponent4;
