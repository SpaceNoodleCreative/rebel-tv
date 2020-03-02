import React from "react";
import data from "../show.json";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import ducky from "../img/ducky.svg";

export const Episode = () => {
  const { showId, episodeId } = useParams();
  const episodeData = data._embedded.episodes.filter(
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
          <Link to={`/${showId}`}>More episodes</Link> &nbsp;{" "}
          <Link to="/">Back home</Link>
        </div>
      </div>
      <div className="footer-duck">
        <img src={ducky} alt="duck" />
        <div className="duck-speak">Quack!</div>
      </div>
    </React.Fragment>
  );
};
