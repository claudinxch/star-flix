import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movieDetails } from "../../services/api";
import { toast } from "react-toastify";
import { MovieDetails } from "../../components/MovieDetails/movie-details";
import { MovieDetailsSkeleton } from "../../components/Skeleton/movie-details-skeleton";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        const response = await movieDetails(id);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        console.error("Movie Not Found", error);
        navigate("/", { replace: true });
        return;
      }
    }

    loadMovieDetails();

    return () => {};
  }, [id, navigate]);

  const saveMovie = () => {
    const myList = localStorage.getItem("@starflix");

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some(
      (moviesSaved) => moviesSaved.id === movie.id
    );

    if (hasMovie) {
      toast.warn("Movie is already in the list");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@starflix", JSON.stringify(savedMovies));
    toast.success("Movie successfully saved");
  };

  return loading ? (
    <MovieDetailsSkeleton />
  ) : (
    <MovieDetails movie={movie} onClick={saveMovie} />
  );
}

export default Movie;
