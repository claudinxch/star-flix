import { Link } from "react-router-dom";
import "./card.css";

function Card({ movie }) {
  return (
    <div className="card">
      <article key={movie.id}>
        <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
            />
          <div className="access">
            <Link to={`/movie/${movie.id}`}>Access</Link>
          </div>
        </div>
        <strong>{movie.title}</strong>
      </article>
    </div>
  );
}

export default Card;
