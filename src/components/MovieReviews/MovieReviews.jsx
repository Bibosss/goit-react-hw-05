import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";

const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const getData = async () => {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data || []);
            } catch (error) {
                console.log(error.message);
            }
        };

        getData();
    }, [movieId]);
    

    if (!reviews.length) {
        return <p>We do not have any reviews for this movie</p>
    };
    return (
        <main>
            <ul>
                {reviews.map(({ author, content, id }) => (
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default MovieReviews;