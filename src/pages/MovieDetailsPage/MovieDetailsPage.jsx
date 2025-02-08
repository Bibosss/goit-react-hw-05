import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api";
import css from "./MovieDetailsPage.module.css"

const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const goBackUrl = useRef(location.state);

    useEffect(() => {
        if (!movieId) return;
        const getData = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setMovies(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getData()
    }, [movieId]);

    if (!movies) return <p>Loading...</p>;

    const { original_title, overview, genres, poster_path, vote_average } = movies;
    const score = Number(vote_average).toFixed(2);

    return (
        <main>
            <Link to={goBackUrl.current} >Go back</Link>
            <div>
                <div className={css.container}>
                    <img src={poster_path
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : defaultImg}
                        loading='lazy' alt='Movie poster' />
                    <div>
                        <h1>{original_title}</h1>
                        <p>User score: {score}%</p>

                        <h2>Overview</h2>
                        <p>{overview || "No description available."}</p>

                        <h2>Genres</h2>
                        <ul>
                            {genres?.length
                                ? genres.map(({ id, name }) => <li key={id}>{name}</li>)
                                : <li>No genres available</li>}
                        </ul>
                    </div>
                </div>
                <div>
                    <nav className="nav">
                        <NavLink to="cast">
                            Cast
                        </NavLink>
                        <NavLink to="reviews">
                            Reviews
                        </NavLink>
                    </nav>
                    <section>
                        <Outlet />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default MovieDetailsPage;