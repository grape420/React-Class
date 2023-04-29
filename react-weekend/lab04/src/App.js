import "./App.css";
import MyComponent2 from "./components/MyComponent2";
import MyComponent from "./components/MyComponent";
import MyComponent3 from "./components/MyComponent3";
import MyComponent4 from "./components/MyComponent4";
import MyState from "./components/MyState";
import MyState2 from "./components/MyState2";
import MyEvent from "./components/MyEvent";

function App() {
  return (
    <>
      <MyEvent />
      <hr />
      <MyState2 />
      <hr />
      <MyComponent name="김종현" id="grape420" age={20} />
      <hr />
      <MyComponent2>
        <span>
          <strong>텍스트입니다.</strong>
        </span>
      </MyComponent2>
      <hr />
      <MyComponent3 name="이순신" age={30}>
        <span>MyComponent3의 자식 노드</span>
      </MyComponent3>
      <hr />
      <MyComponent4 age={40}>
        <span>MyComponent4의 자식 노드입니다.</span>
      </MyComponent4>
      <hr />
      <MyState></MyState>
      <hr />
    </>
  );
}

export default App;
