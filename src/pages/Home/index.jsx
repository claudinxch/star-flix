import { useEffect, useState } from "react";
import { moviesPlaying } from "../../services/api";
import "./home.css";
import { MovieList } from "../../components/MovieList/movie-list";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await moviesPlaying();
        setMovies(response.results); //slice(0,10) when i change to pages
        setLoading(false);
      } catch (error) {}
    }

    loadMovies();
  }, []);

  return <MovieList movies={movies} loading={loading} />;
}

export default Home;
