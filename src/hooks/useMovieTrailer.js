import { useEffect } from "react";
import { API_option } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_option
    );
    const json = await data.json();
    //console.log(json.results);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[3] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useMovieTrailer;
