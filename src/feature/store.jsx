import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gpt_searchReducer from './gptSearchSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt_search: gpt_searchReducer,
  }
});


export default store;