import React, { useState } from 'react';
import { searchMovies } from '../api';
import { Link } from 'react-router-dom';
import '../MovieList.css'; // Import the CSS file

const MovieList = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await searchMovies(query);
    setMovies(response.data.Search || []);
  };

  return (
    <div className="movie-list-container">
      <h1 className='wellcome'>Welcome to Movieflexia</h1>
      <text className='millions'>Millions of Movies, TV shows and People to discover. Explore now.</text>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <Link className='title' to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
