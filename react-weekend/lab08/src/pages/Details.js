import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = (props) => {
  // custom Hooks
  const location = useLocation();
  const { id } = location.state;
  console.log(location.state.id);

  // const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]); // Ajax 요청 결과에서 영화 배열을 저장하기 위한 상태.

  useEffect(() => {
    // async-await를 사용한 axios 사용법:
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://yts-proxy.now.sh/movie_details.json?movie_id=" + id
        );
        // console.log(response.data);
        console.log(response.data.data.movie);

        setMovie(response.data.data.movie);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // async 함수 실행
  }, [id]);

  const { title, year, rating, genres, description_intro, medium_cover_image } =
    movie;

  return (
    <>
      <h1>Movie Details</h1>
      <img src={medium_cover_image} alt={title} />
      <div>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__rating">{rating}</h5>
        <ul className="movie__genres">{genres}</ul>
        <p>{description_intro}</p>
      </div>
    </>
  );
};

export default Details;
