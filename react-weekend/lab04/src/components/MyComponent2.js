import PropTypes from "prop-types";

// props.children : 부모 컴포넌트에서 자식 노드
const MyComponent2 = (props) => {
  let { name, age, children } = props;
  return (
    <>
      <h1>MyComponent2</h1>
      <h2>{name}님 환영합니다.</h2>
      <h2>나이 {age}세</h2>
      <h2>{children}</h2>
    </>
  );
};

// props 기본값 설정 (부모 컴포넌트에 값이 없을 경우 기본값 적용)
MyComponent2.defaultProps = {
  name: "기본이름",
  age: 21,
};

// props 데이터 타입 체크
// props 속성들의 데이터 타입을 검사하고 선언된 타입과 다를 경우 브라우저 콘솔 창에 경고 메시지 출력
MyComponent2.propType = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default MyComponent2;
