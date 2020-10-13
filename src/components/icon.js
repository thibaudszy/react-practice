import React from "react";

export default function icon(props) {
  const { link, cssClass, image } = props;
  return (
    <a href={link}>
      <img className={cssClass} src={image} />
    </a>
  );
}
