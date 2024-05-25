import { useState, useEffect } from "react";
import { upcoming } from "../../services/api";
import { MovieList } from "../../components/MovieList/movie-list";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUpcomingMovies = async () => {
    try {
      const response = await upcoming();
      setMovies(response.results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    loadUpcomingMovies();
  }, []);

  return <MovieList movies={movies} loading={loading} />;
}

export default Upcoming;
