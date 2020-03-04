import React from "react";
import boredImg from "../img/bored.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ requestPending, show }) => {
  return (
    <div className="home-wrap">
      <img src={boredImg} alt="bored" className="home-icon hvr-lift" />
      <h1>Bored?</h1>
      {requestPending ? (
        "wait for it..."
      ) : (
        <Link to={`/yourRandomShow/${show.id}`} className="home-btn">
          Find something to watch
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    requestPending: state.requestPending,
    show: state.show
  };
};

export default connect(mapStateToProps)(Home);
