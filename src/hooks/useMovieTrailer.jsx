import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../feature/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.trailer);

  const getBackgroundVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos`, API_OPTIONS);
    const videoData = await data.json();
    const filteredData = videoData.results.filter((item) => item.type === 'Trailer');
    const trailer = filteredData ? filteredData[0] : videoData.results[0];
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    !movieTrailer && getBackgroundVideo();
  }, []);
};

export default useMovieTrailer;
