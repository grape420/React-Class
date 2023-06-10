import "../index.css";

const Comments = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <>
      <aside className="comment">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{body}</p>
      </aside>
    </>
  );
};

export default Comments;
