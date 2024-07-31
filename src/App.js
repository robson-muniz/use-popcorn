import {useState} from "react";
import {Navbar} from "./components/Navbar";
import {Search} from "./components/Search";
import {NumResults} from "./components/NumResults";
import {Main} from "./components/Main";
import {Box} from "./components/Box";
import {MovieList} from "./components/MovieList";
import {tempMovieData} from "./data/TempMovieData";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import tempWatchedData from "./data/TempWatchedData";

export default function App() {
   const [movies, setMovies] = useState(tempMovieData);
   const [watched, setWatched] = useState(tempWatchedData);

   return (
      <>
         <Navbar>
            <Search />
            <NumResults movies={movies} />
         </Navbar>
         <Main>
            <Box>
               <MovieList movies={movies} />
            </Box>
            <Box>
               <WatchedSummary watched={watched}/>
               <WatchedMovieList watched={watched}/>
            </Box>
         </Main>
      </>
   );
}


