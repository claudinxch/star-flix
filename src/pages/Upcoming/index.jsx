import { useState, useEffect } from "react";
import { upcoming } from "../../services/api";
import Card from "../../components/Card/Card";

function Upcoming() {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadUpcomingMovies = async () => {
        try {
            const response = await upcoming();
            setMovies(response.results)
            setLoading(false)
        } catch(err){

        }
    }

    useEffect(() => {
        loadUpcomingMovies();
    }, []);

    if(loading){
        return(
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            {movies.map((movie) => <Card movie={movie} />)}
        </div>
    )
}

export default Upcoming;