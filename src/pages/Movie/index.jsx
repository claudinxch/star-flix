import { useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './movies.css';
import { movieDetails } from "../../services/api";
import { toast } from 'react-toastify'

function Movie(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        async function loadMovieDetails() {
            try {
                const response = await movieDetails(id);
                setMovie(response);
                setLoading(false)
            } catch (error) {
                console.error("Movie Not Found", error);
                navigate("/", { replace: true});
                return;
            }
        }

        loadMovieDetails();
        
        return () => {

        }

    }, [id, navigate])

    const saveMovie = () => {
        const myList = localStorage.getItem('@starflix');

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((moviesSaved) => moviesSaved.id === movie.id);

        if(hasMovie){
            toast.warn('Movie is already in the list');
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem('@starflix', JSON.stringify(savedMovies));
        toast.success('Movie successfully saved');

    }

    if(loading) {
        return(
            <div className="movie-info">
                <h1>Loading movie details</h1>
            </div>
        )
    }
    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} />
            
            <h3>Synopsis</h3>
            <span>{movie.overview}</span>
            <strong>Rating: {movie.vote_average.toFixed(1)} / 10</strong>

            <div className="buttons-area">
                <button onClick={saveMovie}>Save</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.original_title} Trailer`} target="blank" rel="noreferrer">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movie;