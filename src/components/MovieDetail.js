import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../MovieDetail.css'; // Import the CSS file

const MovieDetail = ({ addToWatchlist }) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=ebd0393f`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  const handleAddToWatchlist = () => {
    if (movie) {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="movie-detail-container">
      {movie && (
        <div className="movie-detail">
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <p> Caste -  {movie.Actors}</p>
          <p>Writer - {movie.Writer}</p>
          <p>Released on - {movie.Released}</p>
          <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>Add to Watchlist</button>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
