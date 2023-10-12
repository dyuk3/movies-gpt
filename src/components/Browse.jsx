import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptSearchStatus = useSelector(store => store.gpt_search.showGptSearch);


  return (
    <div>
      <Header />
      {gptSearchStatus ?
        (

          <GPTSearch />
        )
        :
        (

          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  );
};

export default Browse;