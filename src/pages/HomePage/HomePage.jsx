import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendMovies } from "../../api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getTrendMovies();
                setMovies(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [])


    return (
        <main>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </main>
    )
}

export default HomePage;