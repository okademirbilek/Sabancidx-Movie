import React,{useState} from "react";
import { Link } from "react-router-dom";

function MovieCart({data}) {
  const [imageStatus,setImageStatus] = useState(false)
  return (
    <div className="film-container display-f fd-c align-center pt-1 pb-1 ">
        <img
          src={data.posterUrl}
          className="movie-image"
          alt={`${data.name
          } Poster`}
          onLoad={() => setImageStatus(true)}
          style={!imageStatus ? {display:  "none" } : {display:  "block" }}
        />

        {!imageStatus && (
           <img
           src="https://www.omdbapi.com/src/poster.jpg"
           className="movie-image"
         />  
        )}

      <div className="movie-info display-f fd-c">
        <p className="soft">Year: {data.releaseYear}</p>
        <p className="soft">Platform: {data.platforms[0].platformName}</p>
        <h4>{data.name}</h4>
        <p className="soft">score: {data.rating}</p>
        <p className="genres">{data.genres.map(item => item ).join(", ")}</p>
        <Link to={`/details/${data.movieId
            }`}>See Details</Link>
      </div>
    </div>
  );
}

export default MovieCart;
