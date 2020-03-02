import React from "react";
import boredImg from "../img/bored.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  const max = 46513;
  const nr = Math.floor(Math.random() * (max - 1) + 1);
  console.log(nr);
  return (
    <div className="home-wrap">
      <img src={boredImg} alt="bored" className="home-icon hvr-lift" />
      <h1>Bored?</h1>
      <Link to="/6771" className="home-btn">
        Find something to watch
      </Link>
    </div>
  );
};
