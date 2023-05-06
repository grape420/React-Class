import IterationExample from "./IterationExample";
import IterationExample2 from "./IterationExample2";

function App() {
  const items = ["React", "Vue.js", "Angular.js", "jQuery"];
  const items2 = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue.js" },
    { id: 3, name: "Angular.js" },
    { id: 4, name: "jQuery" },
  ];

  return (
    <>
      <IterationExample items={items}></IterationExample>
      <IterationExample2 items={items2}></IterationExample2>
    </>
  );
}

export default App;
