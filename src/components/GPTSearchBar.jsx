import React, { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGPTMoviesResult } from '../feature/gptSearchSlice';

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  // search for movies based on gpt result
  const fetchSearchedMovie = async (movieName) => {
    const movieData = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movieName +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );

    const jsonData = await movieData.json();

    return jsonData.results;
  };

  // get the gpt query on clicking search
  const handleGPtSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      'Act as a movie recommendation system and suggest some movies for the query: ' +
      searchText.current.value +
      '. only give me names of 5 movies, comma separated like the example given ahead. Example result : don, kismat, dhol, sanam bewafa, gadar';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

    const promiseSearchArray = gptMovies.map((movie) => fetchSearchedMovie(movie));

    const tmdbSearchResults = await Promise.all(promiseSearchArray);

    console.log(tmdbSearchResults);
    dispatch(addGPTMoviesResult({ GPTSearchResult: gptMovies, TMDBMovies: tmdbSearchResults }));
  };

  return (
    <div className='pt-[10%]'>
      <form
        action=''
        className='w-2/4 bg-black/80 rounded grid grid-cols-12 mx-auto'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='text'
          ref={searchText}
          className='p-2 m-6 col-span-9 rounded-lg'
          placeholder='What would you like to watch today!'
        />
        <button
          className='text-white  col-span-3 p-2 m-6 bg-red-600 rounded-lg'
          onClick={handleGPtSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
