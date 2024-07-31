import Movie from '../components/Movie';

export function MovieList({movies}) {

   return (
      <ul className="list">
         {movies?.map((movie) => (
            <Movie movie={movie} key={movie.imdbID}/>
         ))}
      </ul>
   )
}