import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className='bg-zinc-800 text-white   '>
      <div className=' md:-mt-80'>
        <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
        <MovieList title={'Popular'} movies={movies?.popularMovies} />
        <MovieList title={'Top Rated'} movies={movies?.topRatedMovies} />
        <MovieList title={'Upcoming'} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
