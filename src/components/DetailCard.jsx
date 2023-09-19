import React,{useEffect, useState ,useRef} from "react";
import MovieCart from "../components/MovieCart";
import useFetch from "../hooks/useFetch";

export default function DetailCard({data}) {
  const [imageStatus,setImageStatus] = useState(false)
  const [isShow,setIsShow] = useState(false)
  const [directorId,setDirectorId] = useState("")
  const [directorMovies,setDirectorMovies] = useState(null)
  const isMounted = useRef(false);
  console.log(directorId)

  function changeShow(id){
    setIsShow(true)
    setDirectorId(id)
  }

  useEffect(()  => {
    if (isMounted.current) {
      console.log("hiii")
      fetch('https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'pageNumber': 1,
            'pageSize': 50,
            'directorId':directorId
        })
        }).then(res => res.json().then(data => setDirectorMovies(data))) ;
    } else {
      console.log("first render")
      isMounted.current = true;
    }   
  },[isShow])




    return (
      
        <div className="details-container container display-f pt-2 pb-2 mb-2 ">
        <div className='row'>
              <img
                src={data.posterUrl}
                
                alt={`${data.name
                } Poster`}
                onLoad={() => setImageStatus(true)}
                style={!imageStatus ? {display:  "none" } : {display:  "block" }  }
              />

              {!imageStatus && (
                <img
                src="https://www.omdbapi.com/src/poster.jpg"
                className="movie-image"
                style={{maxWidth:"295.5px" , height:"449.97px" }}
              />  
              )}
            
            <div className="movie-info display-f fd-c">
              <h2>{data.name}</h2>
              <p className="soft">Year: {data.releaseYear}</p>
              <p className="soft">score: {data.rating}</p>
              <p>Genres: {data.genres.map(item => item ).join(", ")}</p>
              <p>Director: {data.director.directorName}</p>
              <p>Platforms: {data.platforms.map(item => item.platformName ).join(", ")}</p>
              <p>Actors: {data.actors.map(item => item.actorName ).join(", ")}</p>
              <h3>Movie Description</h3>
              <p className="desp">{data.descriptionContent}</p> 
            </div> 

            <div>
              <h2>Other movies of Directors</h2>
              <button onClick={() => changeShow(data.director.directorId)}> {data.director.directorName}</button>
              <div>
                {directorMovies && isShow &&  (
                  

                  <div className="container align-c  mb-3 p-0 ">
                     <div className="row gp-2  justify-center  pt-3 pb-3"> 
                      {directorMovies.data.movies.map(item => {
                          return <MovieCart key={item.movieId} data={item}/>
                      })}
                      </div>
                   </div>
                )}


              </div>
            </div>

          </div>  
        </div>
        
      );
    }
