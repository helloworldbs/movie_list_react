import React, { useState } from 'react';
import { movies } from '../api/movieapi';
import './Row.css';

const Row = () => {
    const [moviedata, setMoviedata] = useState(movies);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredMovie, setHoveredMovie] = useState(null);

    const handleMouseEnter = (movie) => {
        setHoveredMovie(movie);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cutOverview = (overview) => {
        if (overview.length > 100) {
            return overview.substring(0, 100) + '...';
        }
        return overview;
    };

    console.log(moviedata.results[1].overview);

    return (
        <div className='container'>
            <div className='movie_wrap'>
                {moviedata.results.map((movie, index) => (
                    <div
                        key={index}
                        className='movie_item'
                        onMouseEnter={() => handleMouseEnter(movie)}
                        onMouseLeave={handleMouseLeave}
                    >    
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            className='movie_img'
                            alt={movie.title}
                        />
                        
                        <div className='movie_title'>
                            <h3>{movie.title}</h3>
                            <h3>{movie.vote_average}</h3>
                        </div>

                        {isHovered && hoveredMovie === movie && (
                            <div className='movie_description'>
                                <p>{cutOverview(movie.overview)}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Row;
