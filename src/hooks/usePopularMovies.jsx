import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addPopularMovies } from '../feature/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);

    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  };
};

export default usePopularMovies;
