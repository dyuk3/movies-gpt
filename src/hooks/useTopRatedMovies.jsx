import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../feature/moviesSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);

    const jsonData = await data.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };
};

export default useTopRatedMovies;
