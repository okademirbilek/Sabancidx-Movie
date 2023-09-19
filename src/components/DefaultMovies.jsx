import React from 'react'
import useFetch from "../hooks/useFetch";
import MovieCart from './MovieCart';

export default function DefaultMovies() {
  
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
        'pageSize': 50,
        'releaseYear': "2020",     
      })  
      },
      []
    );  
    
  
  
    if (loading) {
      return <h1 className="error-msg loading">Loading...</h1>;
    }
  
    if (value) {
      // console.log(value.data.totalRecord === 0)
      if (!value.data.totalRecord) {
        return <h1 className="bg-error error-msg">Unable to find what you’re looking for Please try another search </h1>;
      }
    }
  
    if (error) {
      return (
        <div className="error-msg">
          {JSON.stringify(error, null, 2)}
        </div>
      );
    }   

    return (
        <div>
          {value && (
            <div className="container align-c  mb-3 p-0 ">
            <div className="row gp-2  justify-center  pt-3 pb-3"> 
              {value.data.movies.map(item => {
                return <MovieCart key={item.movieId} data={item}/>
              })}
            </div>
          </div>
          )}
          
        </div>
      );
}
