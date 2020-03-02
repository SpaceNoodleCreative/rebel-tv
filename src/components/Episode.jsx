import React from "react";
import data from "../show.json";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const { name, summary, image } = data;
const summaryText = parse(summary);
export const Episode = () => {
  return (
    <React.Fragment>
      <div>
        <img src={image.medium} className="cover" alt="cover" />
      </div>
      <h1>{name}</h1>
      {summaryText}
      <Link to="/">More episodes</Link> &nbsp; <Link to="/">Back home</Link>
    </React.Fragment>
  );
};
