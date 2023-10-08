
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ videoId }) => {
  const movieTrailer = useSelector(store => store.movies?.trailer);


  useMovieTrailer(videoId);

  return (
    <div>
      {/* <video src={bgVideo. }></video> */}
      <iframe
        className='w-full aspect-video'
        play
        src={'https://www.youtube.com/embed/' + movieTrailer?.key + "?&autoplay=1&mute=1"}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

      ></iframe>
    </div >
  );
};

export default VideoBackground;
