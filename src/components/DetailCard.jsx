import React,{useState} from "react";

export default function DetailCard({data}) {
  const [imageStatus,setImageStatus] = useState(false)
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
            
          </div>  
        </div>
        
      );
    }
