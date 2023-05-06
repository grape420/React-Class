import { useState } from "react";
const IterationExample2 = ({ items }) => {
  console.log(items);

  const [list, setList] = useState(items);
  const [nextId, setNextId] = useState(5); // li 엘리먼트의 key로 사용하기 위해서 선언.
  const [inputText, setInputText] = useState(""); // input 엘리먼트의 value를 state(상태)로 관리하기 위해 선언.

  const itemList = list.map(({ id, name }) => (
    <li key={id}>
      {name}
      <button onClick={() => deleteItem(id)}>삭제</button>
    </li>
  ));

  const deleteItem = (id) => {
    // 버튼이 클릭된 li 엘리먼트의 key가 아닌 li 엘리먼트들만 선택(필터링).
    const newList = list.filter((x) => x.id !== id);
    setList(newList);
  };
  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const addItem = (e) => {
    // 리스트에 추가할 아이템 객체를 만듦
    const item = {
      id: nextId,
      name: inputText,
    };
    // 새로운 아이템이 추가된 리스트로 state list를 변경.
    // Array.concat(item) : 원본 배열에 item을 추가한 새로운 배열을 리턴.
    setList(list.concat(item));
    // 그다음 <li> 요소가 추가될 때 key값이 중복되지 않도록 하기 위해서 nextId의 값을 증가.
    setNextId(nextId + 1);
    // input을 비워둔다
    setInputText("");
  };
  return (
    <>
      <h1>Iteration2</h1>
      <input
        type="text"
        placeholder="아이템 입력"
        value={inputText}
        onChange={onChangeInput}
        //onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addItem}>입력</button>
      <ul>
        {/* {items.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))} */}
        {itemList}
      </ul>
    </>
  );
};

export default IterationExample2;
