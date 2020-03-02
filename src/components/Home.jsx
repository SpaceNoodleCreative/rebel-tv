import React from "react";
import boredImg from "../img/bored.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  const max = 46513;
  const randomId = Math.floor(Math.random() * (max - 1) + 1);
  fetch(`http://api.tvmaze.com/shows/${randomId}?embed=episodes`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => err);
  return (
    <div className="home-wrap">
      <img src={boredImg} alt="bored" className="home-icon hvr-lift" />
      <h1>Bored?</h1>
      <Link to={`/${randomId}`} className="home-btn">
        Find something to watch
      </Link>
    </div>
  );
};
