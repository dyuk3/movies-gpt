import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTSuggestion from './GPTSuggestion';
import { NF_BACKGROUND1 } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className=' ' src={NF_BACKGROUND1} alt='background' />
      </div>
      <GPTSearchBar />
      <GPTSuggestion />
    </div>
  );
};

export default GPTSearch;
