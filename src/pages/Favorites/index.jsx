import { useEffect, useState } from "react";
import "./favorites.css";
import { toast } from "react-toastify";
import { FavoriteMovieList } from "../../components/FavoriteMoviesList/favorite-movie-list";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@starflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  const handleDelete = (id) => {
    const filterMovies = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(filterMovies);
    localStorage.setItem("@starflix", JSON.stringify(filterMovies));
    toast.success("Movie successfully removed!");
  };

  return (
    <div className="my-movies">
      <h1>My Movies</h1>

      {movies.length === 0 && <span>You don't have any saved movie :( </span>}

      <FavoriteMovieList movies={movies} onClick={handleDelete} />
    </div>
  );
}

export default Favorites;
