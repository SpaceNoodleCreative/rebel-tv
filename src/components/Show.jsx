import React from "react";
import { Link } from "react-router-dom";
import data from "../show.json";
import parse from "html-react-parser";
import { connect } from "react-redux";
import ducky from "../img/ducky.svg";
// import { increment, decrement, reset } from "./actionCreators";
const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};
const mapDispatchToProps = {};

const Show = () => {
  const { id, name, summary, image, rating } = data;
  const summaryText = summary && summary.length ? parse(summary) : null;
  const episodes = data._embedded.episodes;
  const listKeys = function(xs, key) {
    const obj = xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
    return Object.keys(obj);
  };
  const groupByKey = function(xs, key) {
    const obj = xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
    return Object.values(obj);
  };
  const seasons = listKeys(episodes, "season");
  const episodesBySeason = groupByKey(episodes, "season");

  return (
    <React.Fragment>
      <div>
        <img src={image.medium} className="cover" alt="cover" />
      </div>
      <h1 className="main-title">{name}</h1>
      <div>
        <span role="img" aria-label="star">
          ⭐
        </span>{" "}
        {rating.average}
      </div>
      {summaryText && summaryText}
      <section>
        <div className="cat-title-wrap">
          <h2 className="cat-title">Episodes</h2>
          <nav className="cat-nav">
            {seasons.map(item => (
              <a href={`#s${item}`} key={item}>
                Season {item}
              </a>
            ))}
          </nav>
        </div>
        {episodesBySeason.map((item, i) => (
          <div key={i} className="season">
            <h3>Season {i + 1}</h3>
            <span id={`s${i + 1}`} className="season-anchor"></span>
            <div className="float-grid">
              {item.map(item1 => (
                <div key={item1.id} className="grid-col-25">
                  <Link to={`/${id}/${item1.id}`}>
                    <div className="thumb-wrap">
                      <img
                        src={ducky}
                        alt="no thumbnail duck"
                        className="no-img-thumb"
                      />
                      {item1.image && item1.image.medium && (
                        <img
                          src={item1.image.medium}
                          alt={item1.id}
                          className="thumb hvr-zoom"
                        />
                      )}
                      <div className="thumb-title-wrap">
                        <h4 className="thumb-title">
                          <span className="thumb-code">
                            S{item1.season}E{item1.number}
                          </span>
                          {item1.name}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
