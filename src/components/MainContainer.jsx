import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoInfo from './VideoInfo';

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];

  const { overview, original_title, id } = mainMovie;

  return (
    <div className='pt-[40%] bg-black md:pt-0'>
      <VideoInfo overview={overview} title={original_title} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
