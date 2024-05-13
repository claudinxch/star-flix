import React from "react";
import { Link } from "react-router-dom";
import "./favorite-movie.css";
import { IconButton } from "../IconButton/icon-button";
import { Trash2 } from "lucide-react";

export function FavoriteMovieCard({ movie, onClick }) {
  return (
    <div className="favorite-movie-card">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.original_title}
        />
        <div className="details">
          <Link to={`/movie/${movie.id}`} style={{ color: "#FFD700" }}>
            See details
          </Link>
        </div>
        <span>{movie.original_title}</span>
      </div>
      <IconButton
        onClick={() => onClick(movie.id)}
        style={{ cursor: "pointer" }}
      >
        <Trash2 size={22} />
      </IconButton>
    </div>
  );
}
