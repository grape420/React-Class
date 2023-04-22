// 함수형 컴포넌트
// 컴포넌트의 이름은 대문자로 시작하고 카멜 표기법을 사용
// HTML 태그 이름들과 구분하기 위해서.

// function MyComponent() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

// props : properties. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용.
// props를 전달할 때 부모 컴포넌트에서는 XML의 속성(attribute) 값으로 설정.
// props를 전달받을 때 자식 (함수형) 컴포넌트에서는 파라미터에 전달됨.
const MyComponent = (props) => {
  console.log(props);
  // 부모 컴포넌트에서 {attrName : attrValue, ...} 객체를 파라미터에 전달.
  let { name, id, age } = props;
  return (
    <>
      <h1>My Component</h1>
      <h2>{name}님 환영합니다.</h2>
      <h2>{id}님 환영합니다.</h2>
      <h3>나이 : {age}세</h3>
    </>
  );
};

// 다른 곳에서 import 하려면 export 해줘야함.
export default MyComponent;
