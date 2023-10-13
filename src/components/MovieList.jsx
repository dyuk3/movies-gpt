import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className='md:pl-10 '>
        <h1 className=' py-5 font-bold text-lg'>{title}</h1>
        <div className='flex gap-2 overflow-x-scroll no-scrollbar'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} thumbnail={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
