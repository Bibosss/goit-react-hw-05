import { useEffect, useState } from "react";
import { getMovieSearch } from "../../api";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [movie, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (!query) return;
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
    }, [query]);

    const handleSubmit = movieName => {
        setSearchParams(movieName ? {query: movieName} : {});
    }

    return (
        <main>
            <div>
                <SearchForm onSearch={handleSubmit} initialQuery={query} />
                <MovieList movies={movie} />
            </div>
        </main>
    )
}

export default MoviesPage;