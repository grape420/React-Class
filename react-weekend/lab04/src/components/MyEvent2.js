// 함수형 컴포넌트에서 state 관리/변경, 이벤트 처리
import { useState } from "react";

const MyEvent2 = () => {
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");

  const [obj, setObj] = useState({
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // if (name === "username") setUsername(value);
    // else if (name === "message") setMessage(value);
    const { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  };
  const clear = () => {
    setObj({
      username: "",
      message: "",
    });
  };

  return (
    <>
      <h1>함수형 컴포넌트 이벤트 처리</h1>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <br />
      <input type="text" readOnly value={obj.username} />
      <br />
      <input
        type="text"
        name="message"
        onChange={handleChange}
        placeholder="message"
      />
      <br />
      <input type="text" readOnly value={obj.message} />
      <br />
      <button onClick={clear}>Clear</button>
    </>
  );
};

export default MyEvent2;
