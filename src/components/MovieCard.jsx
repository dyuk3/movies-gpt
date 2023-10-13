import React from 'react';
import { DEFAULT_IMAGE, MOVIE_THUMBNAIL_URL } from '../utils/constants';

const MovieCard = ({ thumbnail }) => {
  console.log();
  return (
    <div>
      <div className='w-36 md:w-52'>
        <img
          className='rounded'
          src={thumbnail ? `${MOVIE_THUMBNAIL_URL}${thumbnail}` : `${DEFAULT_IMAGE}`}
          alt=''
        />
      </div>
    </div>
  );
};

export default MovieCard;
