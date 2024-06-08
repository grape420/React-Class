import { useRef, useState } from "react";

const RefDOM = () => {
  // input에 입력한 value state를 관리하기 위해서.
  const [text, setText] = useState("");

  // DOM을 참조하는 ref
  const inputRef = useRef(null);

  const handleClick = (e) => {
    // input의 내용을 비움.
    setText("");
    // input에 focus를 줌.
    inputRef.current.focus();
  };

  return (
    <>
      <h2>ref로 DOM 조작하기</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="메세지 입력하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>전송</button>
    </>
  );
};

export default RefDOM;
