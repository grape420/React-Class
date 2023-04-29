const IterationExample = (props) => {
  const items = props.items;
  return (
    <>
      <h1>List 만들기</h1>
      <ul>
        {items.map((value, index, arr) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
};

export default IterationExample;
