import React from "react";
import boredImg from "../img/bored.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-wrap">
      <img src={boredImg} alt="bored" className="home-icon hvr-lift" />
      <h1>Bored?</h1>
      <Link to="/show" className="home-btn">
        Find something to watch
      </Link>
    </div>
  );
};
