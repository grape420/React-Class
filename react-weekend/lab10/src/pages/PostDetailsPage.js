import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "../slices/PostDetailsSlice";
import { useParams } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import { fetchComments } from "../slices/CommentsSlice";
import Comments from "../components/Comments";

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const {
    post,
    loading: postLoading,
    hasError: postHasError,
  } = useSelector((state) => state.postDetails);
  const {
    comments,
    loading: commentsLoading,
    hasError: commentsHasError,
  } = useSelector((state) => state.comments);

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPostDetails(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  const renderPost = () => {
    if (postLoading) {
      return <p>loading...</p>;
    }
    if (postHasError) {
      return <p>목록 처리 중 에러...</p>;
    }
    return <PostDetails post={post} />;
  };
  const renderComments = () => {
    if (commentsLoading) {
      return <p>loading...</p>;
    }
    if (commentsHasError) {
      return <p>목록 처리 중 에러...</p>;
    }
    return comments.map((comment) => (
      <Comments key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      {renderPost()}
      <h2>댓글 목록</h2>
      {renderComments()}
    </section>
  );
};

export default PostDetailsPage;
