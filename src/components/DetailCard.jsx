import React from 'react'

export default function DetailCard({data}) {
  console.log(data)
    return (
      
        <div className="details-container container display-f pt-2 pb-2 mb-2 ">
        <div className='row'>
          <img
              src={data.posterUrl}
              className="movie-image"
              alt={`${data.name} Poster`}
            />
            
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
            
          </div>  
        </div>
        
      );
    }
