import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  console.log(IMG_CDN_URL);
  return (
    <div>
      <img alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
