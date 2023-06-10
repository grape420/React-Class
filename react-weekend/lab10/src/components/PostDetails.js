const PostDetails = ({ post }) => {
  const { title, id, body, username, email } = post;
  return (
    <>
      <h1>포스트 상세보기</h1>
      <h2>
        {id}.{title}
      </h2>
      <h4>{username}</h4>
      <h4>{email}</h4>
      <p>{body}</p>
    </>
  );
};

export default PostDetails;
