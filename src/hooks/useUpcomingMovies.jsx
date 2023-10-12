import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUpcomingMovies } from '../feature/moviesSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);

    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };
};

export default useUpcomingMovies;
