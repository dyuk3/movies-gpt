import React from 'react';
import { MOVIE_THUMBNAIL_URL } from '../utils/constants';

const MovieCard = ({ thumbnail }) => {
  return (
    <div>
      <div className='w-52   '>
        <img className='rounded' src={MOVIE_THUMBNAIL_URL + thumbnail} alt="" />
      </div>
    </div>
  );
};

export default MovieCard;