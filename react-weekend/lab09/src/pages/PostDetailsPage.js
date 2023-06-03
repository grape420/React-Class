import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostDetails } from "../actions/postDetailsActions";
import { Link, useParams } from "react-router-dom";

const PostDetailsPage = ({ dispatch, post, loading, hasErrors }) => {
  // URL의 path variable(파라미터) 찾기
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [id, dispatch]);

  const renderPost = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (hasErrors) {
      return <p>Some error...</p>;
    }

    return (
      <>
        <h1>포스트 상세보기 페이지</h1>
        <h2>{post.title}</h2>
        <h4>postId : {post.id}</h4>
        <h4>userId: {post.userId}</h4>
        <h4>{post.body}</h4>

        <Link to="/posts">목록으로 돌아가기</Link>
      </>
    );
  };
  return <>{renderPost()}</>;
};

const mapStateToProps = (state) => ({
  post: state.postDetails.post,
  loading: state.postDetails.loading,
  hasErrors: state.postDetails.hasErrors,
});
export default connect(mapStateToProps)(PostDetailsPage);
