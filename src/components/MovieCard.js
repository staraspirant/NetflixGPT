import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img src={IMG_CDN_URL + posterPath} alt="MovieCard" />
    </div>
  );
};

export default MovieCard;
