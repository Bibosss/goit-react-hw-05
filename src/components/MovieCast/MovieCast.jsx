import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";

const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;
        const getData = async () => {
            try {
                const data = await getMovieCast(movieId);
                setCast(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [movieId]);

    if (!cast.length) return <p>No cast information available.</p>;

    return (
        <ul>
            {cast.map(({ id, name, profile_path, character }) => (
                <li key={id}>
                    <img
                        src={profile_path
                            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                            : defaultImg
                        }
                        alt="actor"
                        loading="lazy"
                        width='120'
                    />
                    <h3>{name}</h3>
                    <p>{character}</p>
                </li>
            ))}
        </ul>
    )
}

export default MovieCast;