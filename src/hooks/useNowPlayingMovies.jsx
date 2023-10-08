import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../feature/moviesSlice';



const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);

    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));


  };
};

export default useNowPlayingMovies;