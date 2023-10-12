import { createSlice } from '@reduxjs/toolkit';

const gptSearchSlice = createSlice({
  name: 'gpt-search',
  initialState: {
    showGptSearch: false,
    GPTSearchResult: null,
    TMDBMovies: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMoviesResult: (state, action) => {
      const { GPTSearchResult, TMDBMovies } = action.payload;
      state.GPTSearchResult = GPTSearchResult;
      state.TMDBMovies = TMDBMovies;
    },
  },
});

export const { toggleGptSearch, closeGptSearch, addGPTMoviesResult } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
