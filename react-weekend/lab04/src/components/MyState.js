const MyState = (props) => {
  console.log(props);
  // 부모 컴포넌트에서 {attrName : attrValue, ...} 객체를 파라미터에 전달.
  let { name, id, age } = props;
  return (
    <>
      <h1>My State</h1>
    </>
  );
};

// 다른 곳에서 import 하려면 export 해줘야함.
export default MyState;
