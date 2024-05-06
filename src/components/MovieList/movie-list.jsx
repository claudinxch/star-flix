import React, { useState } from "react";
import Card from "../Card/Card";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { IconButton } from "../IconButton/icon-button";
import "./movie-list.css";

export function MovieList({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      {movies.slice((currentPage - 1) * 10, currentPage * 10).map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
      <div className="arrows">
        <IconButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          <ChevronLeft color="#FFD700" />
        </IconButton>
        <IconButton onClick={goToNextPage} disabled={currentPage === 2}>
          <ChevronRight color="#FFD700" />
        </IconButton>
      </div>
    </div>
  );
}
