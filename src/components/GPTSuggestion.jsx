import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GPTSuggestion = () => {
  const { GPTSearchResult, TMDBMovies } = useSelector((store) => store.gpt_search);
  if (!TMDBMovies) return null;

  return (
    <div className='m-4 p-4 md:m-10 md:p-10 text-white bg-black/80 '>
      <div>
        {GPTSearchResult.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={TMDBMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestion;
