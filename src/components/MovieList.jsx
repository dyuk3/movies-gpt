import React from 'react';
import MovieCard from './MovieCard';
import { MOVIE_THUMBNAIL_URL } from '../utils/constants';

const MovieList = ({ title, movies }) => {

  console.log(movies);

  return (
    <div >
      <div className='pl-10 py-5'>
        <h1 className=' py-5 font-bold text-lg'>{title}</h1>
        <div className='flex gap-2 overflow-x-scroll no-scrollbar'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} thumbnail={movie.poster_path} />
          ))}
        </div>
      </div>

      {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}
    </div>
  );
};

export default MovieList;