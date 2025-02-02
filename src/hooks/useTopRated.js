import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import {  addTopRated } from "../Utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addTopRated(res.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useTopRated;
