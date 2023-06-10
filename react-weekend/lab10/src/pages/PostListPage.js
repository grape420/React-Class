import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList } from "../slices/PostListSlice";
import PostItem from "../components/PostItem";

const PostListPage = () => {
  const dispatch = useDispatch(); // 리덕스 스토어로 액션을 전달할 수 있는 dispatch 함수
  const { posts, loading, hasError } = useSelector((state) => state.postList);

  // 리덕스 스토어가 관리하는 전역 state 객체들 중 컴포넌트에서 필요한 state를 선택
  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch]);

  // fetch 로딩중, 성공, 실패에 따른 화면 처리
  const renderPostList = () => {
    if (loading) {
      return <p>loading...</p>;
    }
    if (hasError) {
      return <p>목록 처리 중 에러...</p>;
    }
    return posts.map((post) => <PostItem key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>포스트 목록 페이지</h1>
      {renderPostList()}
    </section>
  );
};

export default PostListPage;
