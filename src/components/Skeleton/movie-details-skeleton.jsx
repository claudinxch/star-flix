import React from "react";
import "./styles/movie-details-skeleton.css";

export const MovieDetailsSkeleton = () => {
  return (
    <div className="movie-info-skeleton">
      <div className="title-skeleton skeleton"></div>
      <div className="image-skeleton skeleton"></div>
      <div className="synopsis-title-skeleton skeleton"></div>
      <div className="overview-skeleton skeleton"></div>
      <div className="rating-skeleton skeleton"></div>
      <div className="buttons-area-skeleton">
        <div className="button-skeleton skeleton"></div>
        <div className="button-skeleton skeleton"></div>
      </div>
    </div>
  );
};
