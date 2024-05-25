import React from "react";
import "./card-skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="container-skeleton">
        <div className="image-card skeleton"></div>
        <div className="name skeleton"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
