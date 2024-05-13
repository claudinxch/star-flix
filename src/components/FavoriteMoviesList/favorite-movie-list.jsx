import React from "react";
import "./favorite-movie-list.css";
import { FavoriteMovieCard } from "../FavoriteMovieCard/favorite-movie-card";

export function FavoriteMovieList({ movies, onClick }) {
  return (
    <div className="list">
      {movies.map((movie) => {
        return (
          <FavoriteMovieCard key={movie.id} movie={movie} onClick={onClick} />
        );
      })}
    </div>
  );
}
