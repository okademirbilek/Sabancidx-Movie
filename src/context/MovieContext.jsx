import React, { useContext, useState, useEffect, createContext } from "react";

const MovieContext = createContext();

function useData() {
  return useContext(MovieContext);
}

function MovieProvider({ children }) {
  const [allData, setAllData] = useState({
    year: [],
    genre: [],
    platform: [],
  });
  
  useEffect(() => {
    fetch('https://communicationservice.sabancidx.com/moviemap/movie/get-release-year-list', {
        headers: {
            'accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => setAllData((prevState) => ({ ...prevState, year: data })));

    fetch('https://communicationservice.sabancidx.com/moviemap/movie/get-genre-list', {
        headers: {
            'accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => setAllData((prevState) => ({ ...prevState, genre: data })));

    fetch('https://communicationservice.sabancidx.com/moviemap/movie/get-platform-list', {
        headers: {
            'accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => setAllData((prevState) => ({ ...prevState, platform: data })));
  }, []);

  const value = {
    allData,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

export { MovieProvider, MovieContext, useData };

