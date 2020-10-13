import React from "react";
import "../App.css";

export default function ItemTeam(props) {
  const { source, caption, imgTitle } = props;
  const element = imgTitle ? (
    <div className="item team">
      <img className="image" src={source} />
      <div className="component-title title">{imgTitle}</div>
      <div className="component-title title">{caption}</div>
    </div>
  ) : (
    <div className="item team">
      <img className="image" src={source} />
      <div className="component-title title">{caption}</div>
    </div>
  );

  return element;
}
