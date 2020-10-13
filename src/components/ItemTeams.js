import React from "react";
import "../App.css";

export default function ItemTeam(props) {
  const { source, caption, imgTitle } = props;
  const jsxImgTitle = imgTitle ? (
    <div className="section-why-usp">
      <div className="component-title title">{imgTitle}</div>
    </div>
  ) : (
    ""
  );

  const element = (
    <div className="item team">
      <img className="image" src={source} />
      {jsxImgTitle}
      <div className="component-title title">{caption}</div>
    </div>
  );
  return element;
}
