// 함수의 파라미터에 바로 객체 구조 분해 할당해서 사용 가능
const MyComponent3 = ({ children, name, age }) => {
  return (
    <>
      <h1>MyComponent3</h1>
      <h2>{name}님 안녕하세요.</h2>
      <h2>나이 {age}세</h2>
      <h2>{children}</h2>
    </>
  );
};

export default MyComponent3;
