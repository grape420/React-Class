/*
  함수형 컴포넌트에서 상태(state) 관리/변경
  (1) useState(initValue) 함수를 호출.
    - state의 초기값을 파라미터에 전달.
    - 원소가 2개인 배열을 리턴. 배열의 첫번째 원소는 현재 상태 값. 두번째 원소는 상태 변경 함수
 */

import { useState } from "react";

const MyState2 = () => {
  // 초기값 0
  const [value, setValue] = useState(0);
  const [name, setName] = useState("홍길동");
  const plusCount = () => {
    // setValue(nextValue);
    // 새로운 값을 파라미터에 전달.
    setValue(value + 1);
  };
  const minusCount = () => {
    // setValue(updater);
    // updater 함수를 파라미터에 전달.
    setValue((prevValue) => prevValue - 1);
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <h1>MyState2</h1>
      <div>Count : {value}</div>
      <div>이름 : {name}</div>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <input type="text" value={name} onChange={nameChange} />
    </>
  );
};

export default MyState2;
