import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTSuggestion from './GPTSuggestion';
import { NF_BACKGROUND1 } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
      <div className='fixed  -z-10'>
        <img className='md:h-full object-cover h-screen' src={NF_BACKGROUND1} alt='background' />
      </div>
      <div className='pt-[50%] md:pt-[10%]'>
        <GPTSearchBar />
        <GPTSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
