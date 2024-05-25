import React from "react";
import "./movie-details.css";
import { IconButton } from "../IconButton/icon-button";

export const MovieDetails = ({ movie, onClick }) => {
  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.original_title}
      />

      <h3>Synopsis</h3>
      <span>{movie.overview}</span>
      <strong>Rating: {movie.vote_average.toFixed(1)} / 10</strong>

      <div className="buttons-area">
        <IconButton onClick={onClick}>Save</IconButton>
        <IconButton>
          <a
            href={`https://youtube.com/results?search_query=${movie.original_title} Trailer`}
            target="blank"
            rel="noreferrer"
          >
            Trailer
          </a>
        </IconButton>
      </div>
    </div>
  );
};
