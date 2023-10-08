import { FaPlay } from 'react-icons/fa';
import { ImInfo } from 'react-icons/im';

const VideoInfo = ({ overview, title }) => {
  return (
    <div className="mt-80 w-1/3 m-12 absolute text-white">
      <h1 className="font-extrabold text-5xl">{title}</h1>
      <p className="my-6">{overview}</p>
      <div className='flex gap-2' >
        <button className="bg-white hover:bg-opacity-80 text-black px-10 text-lg font-semibold rounded py-3 flex items-center justify-center">
          <FaPlay className=' mr-3 ' size='28px' />
          Play
        </button>
        <button className="bg-gray-500/70 hover:bg-gray-500/50 px-10 text-lg font-semibold rounded py-3 text-white flex items-center justify-center">
          <ImInfo className='mr-2' size='28px' />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;