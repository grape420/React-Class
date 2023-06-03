import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>여기는 Dashboard 입니다...</p>

      <Link to="/posts">포스트 목록</Link>
    </>
  );
};

export default Dashboard;
