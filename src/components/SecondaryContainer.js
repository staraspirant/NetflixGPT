import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //console.log(movies);
  return (
    <>
      <MovieList title={"Now Playing"} movies={movies} />
      {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
    </>
  );
};

export default SecondaryContainer;
