import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  usePopularMovies()
  useTopRated()
  return (
    <>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
