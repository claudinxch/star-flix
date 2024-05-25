import { useState, useEffect } from "react";
import { topRated } from "../../services/api";
import { MovieList } from "../../components/MovieList/movie-list";

function TopRated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTopRatedMovies() {
      try {
        const response = await topRated();
        setMovies(response.results); //slice(0,10) when i change to pages of movies
        setLoading(false);
      } catch (err) {}
    }

    loadTopRatedMovies();
  }, []);

  return <MovieList movies={movies} loading={loading} />;
}

export default TopRated;
