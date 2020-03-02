import React from "react";
import { Link } from "react-router-dom";
import data from "../show.json";
import parse from "html-react-parser";
import { connect } from "react-redux";
// import { increment, decrement, reset } from "./actionCreators";

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = {
  /*increment, decrement, reset*/
};
const { id, name, summary, image } = data;
const summaryText = parse(summary);
const episodes = data._embedded.episodes;
var groupByKey = function(xs, key) {
  const obj = xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  return Object.values(obj);
};
const episodesBySeason = groupByKey(episodes, "season");

const Show = () => {
  return (
    <React.Fragment>
      <div>
        <img src={image.medium} className="cover" alt="cover" />
      </div>
      <h1>{name}</h1>
      {summaryText}
      <section>
        <h2>Episodes</h2>
        {episodesBySeason.map((item, i) => (
          <div key={i} className="season">
            <h3>Season {i + 1}</h3>
            <ul>
              {item.map(item1 => (
                <li key={item1.id}>
                  <Link to={`/${id}/episode/s${item1.season}e${item1.number}`}>
                    {item1.image && item1.image.medium && (
                      <img
                        src={item1.image.medium}
                        alt={item1.id}
                        className="thumb"
                      />
                    )}
                    <h4>{item1.name}</h4>
                    <p>{item1.airdate}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
