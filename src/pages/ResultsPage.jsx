import React from "react";
import useFetch from "../hooks/useFetch";
import MovieCart from "../components/MovieCart";

import { useData } from "../context/MovieContext";

import {useOutletContext} from "react-router-dom";

export default function ResultsPage() {
  const {currentMovieName, seachOption} = useOutletContext();
  //getting all genre , year , and platform data
  const { allData } = useData();
  

  let option;

  if(seachOption === "year") {
    const result1 = allData.year.data.releaseYears.filter(item => item.year === currentMovieName)
    option = {
      'pageNumber': 1,
      'pageSize': 50,
      'releaseYear':  result1[0]?.year || currentMovieName  ,     
    }
  }else if (seachOption === "genre") {
    const result2 = allData.genre.data.genres.filter(item => item.genreName === currentMovieName)
    option = {
      'pageNumber': 1,
      'pageSize': 50,
      'genreId': result2[0]?.genreId || currentMovieName  ,     
    }
  }else if (seachOption === "platform") {
    const result3 =  allData.platform.data.platforms.filter(item => item.platformName === currentMovieName)
    option = {
      'pageNumber': 1,
      'pageSize': 50,
      'platformId': result3[0]?.platformId  || currentMovieName,    
    }
  }

  const {loading, error, value} = useFetch(
  'https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list',
  {
  method: 'POST',
  headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(option)  
  },
  [currentMovieName,seachOption]
);

  if (loading) {
    return <h1 className="error-msg loading">Loading...</h1>;
  }

  if (value) {
    console.log(value)
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



// const {loading, error, value} = useFetch(
//   'https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list',
//   {
//   method: 'POST',
//   headers: {
//       'accept': 'application/json',
//       'Content-Type': 'application/json'
//   },
//   // body: '{\n  "pageNumber": 0,\n  "pageSize": 0,\n  "movieId": "string",\n  "releaseYear": "string",\n  "genreId": "string",\n  "directorId": "string",\n  "actorId": "string",\n  "platformId": "string"\n}',
//   body: JSON.stringify({
//       'pageNumber': 0,
//       'pageSize': 0,
//       'movieId': 'string',
//       'releaseYear': '2023',
//       'genreId': 'string',
//       'directorId': 'string',
//       'actorId': 'string',
//       'platformId': 'string'
//   })  
//   },
//   [currentMovieName]
// );









 // useEffect(() => {
  //   fetch('https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list', {
  //   method: 'POST',
  //   headers: {
  //       'accept': 'application/json',
  //       'Content-Type': 'application/json'
  //   },
  //   // body: '{\n  "pageNumber": 0,\n  "pageSize": 0,\n  "movieId": "string",\n  "releaseYear": "string",\n  "genreId": "string",\n  "directorId": "string",\n  "actorId": "string",\n  "platformId": "string"\n}',
  //   body: JSON.stringify({
  //       'pageNumber': 0,
  //       'pageSize': 0,
  //       'movieId': 'string',
  //       'releaseYear': 'string',
  //       'genreId': 'string',
  //       'directorId': 'string',
  //       'actorId': 'string',
  //       'platformId': 'string'
  //   })
  // }).then(res => console.log(res.ok))
  // // .then(data => console.log(data))
  // },[])
