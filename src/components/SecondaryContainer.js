import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </>
  );
};

export default SecondaryContainer;
