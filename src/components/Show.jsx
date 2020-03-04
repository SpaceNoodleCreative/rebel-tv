import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ducky from "../img/ducky.svg";
import { listKeys, groupByKey } from "../actions/actions";
import { connect } from "react-redux";

const Show = ({ show }) => {
  const { id, name, summary, image, rating, episodes } = show;
  const summaryText = summary && summary.length ? parse(summary) : null;
  if (!id) {
    return <div>wait for it</div>;
  }
  return (
    <React.Fragment>
      <div>
        {show.image && show.image.medium ? (
          <img src={image.medium} className="cover" alt="cover" />
        ) : null}
      </div>
      <h1 className="main-title">{name}</h1>
      {rating && rating.average > 0 && (
        <div>
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          {rating.average}
        </div>
      )}
      {summaryText && summaryText}
      <a href="/">Back home</a>
      <section>
        <div className="cat-title-wrap">
          <nav className="cat-nav">
            {episodes.length > 0 && <h2 className="cat-title">Episodes</h2> &&
              listKeys(episodes, "season").map(item => (
                <a href={`#s${item}`} key={item}>
                  Season {item}
                </a>
              ))}
          </nav>
        </div>
        {episodes.length > 0 &&
          groupByKey(episodes, "season").map((item, i) => (
            <div key={i} className="season">
              <h3>Season {i + 1}</h3>
              <span id={`s${i + 1}`} className="season-anchor"></span>
              <div className="float-grid">
                {item.map(item1 => (
                  <div key={item1.id} className="grid-col-25">
                    <Link to={`/yourRandomShow/${id}/${item1.id}`}>
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

const mapStateToProps = state => {
  return {
    requestPending: state.requestPending,
    show: state.show
  };
};

export default connect(mapStateToProps)(Show);
