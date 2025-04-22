// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.title}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.description}</p>
      <span>Rating: {movie.rating}</span>
    </div>
  );
};

export default MovieCard;
