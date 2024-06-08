import { useRef } from "react";
import RefVsState from "./components/RefVsState";
import StopWatch from "./components/StopWatch";
import RefDOM from "./components/RefDOM";
import ForwardRef from "./components/ForwardRef";
import ScrollDOM from "./components/ScrollDOM";
import ScrollDOM2 from "./components/ScrollDOM2";

function App() {
  const ref = useRef(0);
  console.log(ref);
  /*
    useRef 함수는 current 속성만을 갖는 자바스크립트 객체를 리턴.
   */

  const handleClick = (e) => {
    // ref 객체의 current 값을 1 증가. alert 창을 띄움.
    ref.current++;
    alert(`${ref.current}번 클릭`);
  };

  return (
    <>
      <h1>useRef</h1>
      <div>
        <button onClick={handleClick}>클릭!</button>
      </div>
      <hr />
      <RefVsState />

      <hr />
      <StopWatch />

      <hr />
      <RefDOM />

      <hr />
      <ForwardRef />

      <hr />
      <ScrollDOM />

      <hr />
      <ScrollDOM2 />
    </>
  );
}

export default App;
