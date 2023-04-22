import "./App.css";
import MyComponent2 from "./components/MyComponent2";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      <MyComponent name="김종현" id="grape420" age={20} />
      <MyComponent2 />
    </>
  );
}

export default App;
