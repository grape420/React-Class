import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); // Ajax 요청 결과에서 영화 배열을 저장하기 위한 상태.

  useEffect(() => {
    // async-await를 사용한 axios 사용법:
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        // console.log(response.data.data.movies);

        setMovies(response.data.data.movies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // async 함수 실행
  }, []);

  return (
    <div className="container">
      {loading ? (
        "Loading..."
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              className="movies"
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
              year={movie.year}
              genres={movie.genres}
              summary={movie.summary}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
