import { useEffect, useState } from "react";
import { getMovieSearch } from "../../api";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getMovieSearch(query);
                setMovie(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [query])

    return (
        <main>
            <div>
                <SearchForm onSearch={setQuery} />
                <MovieList movies={movie} />
            </div>
        </main>
    )
}

export default MoviesPage;