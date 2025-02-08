import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={location} >
                        {movie.original_title || movie.name || movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MovieList;