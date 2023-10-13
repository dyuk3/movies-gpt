import { FaPlay } from 'react-icons/fa';
import { ImInfo } from 'react-icons/im';

const VideoInfo = ({ overview, title }) => {
  return (
    <div className=' md:mt-80 w-1/3 md:ml-12  absolute text-white'>
      <h1 className='md:font-extrabold md:text-5xl'>{title}</h1>
      <p className=' hidden md:inline-block my-6'>{overview}</p>
      <div className='flex gap-2'>
        <button className='hidden bg-white hover:bg-opacity-80 text-black px-10 text-lg font-semibold rounded py-3 md:flex items-center justify-center'>
          <FaPlay className='md:mr-3' size='28px' />
          Play
        </button>
        <button className='hidden bg-gray-500/70 hover:bg-gray-500/50 px-10 text-lg font-semibold rounded py-3 text-white md:flex items-center justify-center'>
          <ImInfo className='mr-2' size='28px' />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
