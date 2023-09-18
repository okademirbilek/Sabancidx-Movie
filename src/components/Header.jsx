import React,{useState} from "react";
import SearchBar from "../components/SearchBar";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header({ setCurrentMovieName, setSearchOption }) {
 const handleChange = (event) => {
  setSearchOption(event.target.value);
 };
  return (
    <header className="header container display-f  pt-1 mb-2">
      <div className="row">
        <img className="logo" src={logo} alt="movie title logo S" />
        <Link to="/">
          <h1 className="ml-1">Movie</h1>
        </Link>
        <SearchBar setCurrentMovieName={setCurrentMovieName} />
        <div className="dropdown" onChange={handleChange}>
          <select className="bg-headerColor">
              <option value="year">Year</option>
              <option value="genre">Genre</option>
              <option value="platform">Platform</option>
              </select>
          </div>
      </div>
    </header>
  );
}

export default Header;
