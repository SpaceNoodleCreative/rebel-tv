import React from "react";
import data from "../show.json";
import parse from "html-react-parser";

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
    </React.Fragment>
  );
};
