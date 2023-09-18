import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailCard from "../components/DetailCard";

export default function MovieDetails() {
  const params = useParams();
  console.log(params.movie);

  const {loading, error, value} = useFetch(
    'https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list',
    {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'pageNumber': 1,
        'movieId': params.movie    
    })  
    },
    [params.movie]
  );
  
  
    if (loading) {
      return <h1 className="error-msg">Loading...</h1>;
    }
  
    if (value) {
      // console.log(value.data)
      if (value.Response === "False") {
        return <h1 className="error-msg">{value.Error}</h1>;
      }
    }
  
    if (error) {
      return (
        <div className="error-msg">
          Unable to find what you’re looking for Please try another search
          {JSON.stringify(error, null, 2)}
        </div>
      );
    }

  return (
    <div className="movie-detail-container">
      <DetailCard data={value.data.movies[0]}/>
    </div>
  );
}
