import React from "react";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import ducky from "../img/ducky.svg";
import { connect } from "react-redux";

const Episode = ({ requestPending, show }) => {
  const { showId, episodeId } = useParams();
  const episodeData = show.episodes.filter(
    item => item.id === parseInt(episodeId)
  )[0];
  const { name, summary, image, season, number } = episodeData;
  const summaryText = summary && summary.length ? parse(summary) : null;

  return (
    <React.Fragment>
      <div className="episode-img-wrap">
        <div className="thumb-wrap">
          <img src={ducky} alt="no thumbnail duck" className="no-img-thumb" />
          {image && image.medium && (
            <img src={image.medium} alt={episodeId} className="thumb" />
          )}
        </div>
      </div>
      <div className="episode-text-wrap">
        <div className="episode-text-wrap-inner">
          <h1 className="main-title">
            <span className="episode-name">{name}</span>
            <span className="episode-code">
              S{season}E{number}
            </span>
          </h1>
          {summaryText && summaryText}
          <Link to={`/yourRandomShow/${showId}`}>
            More episodes
          </Link> &nbsp; <a href="/">Back home</a>
        </div>
      </div>
      <div className="footer-duck">
        <img src={ducky} alt="duck" />
        <div className="duck-speak">Quack!</div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    requestPending: state.requestPending,
    show: state.show
  };
};

export default connect(mapStateToProps)(Episode);
