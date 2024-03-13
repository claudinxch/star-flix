import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favorites.css';
import { toast } from 'react-toastify'

function Favorites() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const myList = localStorage.getItem('@starflix');
        setMovies(JSON.parse(myList) || [])

    }, [])

    const handleDelete = (id) => {
        const filterMovies = movies.filter((movie) => {
            return (movie.id !== id)
        })

        setMovies(filterMovies);
        localStorage.setItem('@starflix', JSON.stringify(filterMovies))
        toast.success('Movie successfully removed!')
    }

    return(
        <div className='my-movies'>
            <h1>My Movies</h1>

            {movies.length === 0 && <span>You don't have any saved movie :( </span>}

            <ul>
                {movies.map((movie) => {
                    return(
                        <li key={movie.id}>
                            <span>{movie.original_title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>See details</Link>
                                <button onClick={() => handleDelete(movie.id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;