import React from "react";
import "../App.css";
import ItemTeam from "./ItemTeams";

export default function icon(props) {
  const { title, subTitle, description, image1, image2, image3 } = props;
  const images = [image1, image2, image3];
  //console.log(images);
  return (
    <div>
      <div className="section section-what-usp">
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">{title}</div>
          </div>

          <h2>
            <div className="component-title ">{subTitle}</div>
          </h2>

          <div className="description">{description}</div>
        </div>

        <div className="component-usp-row">
          {images.map((image) => {
            //console.log(image);
            return (
              <ItemTeam
                source={image.source}
                caption={image.caption}
                imgTitle={image.imgTitle}
              />
            );
          })}
        </div>
      </div>
      <div className="section-line">
        <div className="line "></div>
      </div>
    </div>
  );
}
