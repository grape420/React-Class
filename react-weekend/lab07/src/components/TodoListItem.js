import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

// 할 일 아이템.
const TodoListItem = ({ todo }) => {
  // console.log(todo);
  const { text, checked } = todo;
  return (
    <>
      <div className="TodoListItem">
        <div className={cn("checkbox", { checked })}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
