import React, { useRef } from "react";
import { Highlight } from "react-instantsearch-hooks-web";

import "./projects.scss";

const Project = ({ hit }) => {
  const slider = useRef(null);
  const sliderContent = useRef(null);
  const sliderContentInner = useRef(null);
  const arrows = useRef(null);
  const img = useRef(null);
  let deltaX = 0;

  const displayPicture = (event) => {
    if (event.target.className.includes("left") || event.keyCode === 37) {
      deltaX -= img.current.width;

      deltaX %= hit.pictures.length * img.current.width;

      if (deltaX < 0) {
        deltaX = 0;
      }
    } else if (
      event.target.className.includes("right") ||
      event.keyCode === 39
    ) {
      deltaX += img.current.width;

      deltaX %= hit.pictures.length * img.current.width;
    }

    sliderContentInner.current.style.marginLeft = `-${deltaX}px`;
  };

  return (
    <div className="project">
      {/* tabIndex property to make sure
      that onfocus on div, if left and
      right arrow keys are pressed,
      previous or next picture is showed
      respectively */}
      <div
        ref={slider}
        className="project-slider"
        tabIndex="-1"
        onKeyDown={displayPicture}
      >
        <div ref={sliderContent} className="project-slider-content">
          <div
            ref={sliderContentInner}
            className="project-slider-content-inner"
          >
            {hit.pictures &&
              hit.pictures.map(({ id, pictureContent, pictureAlt }) => (
                <img
                  src={pictureContent}
                  alt={pictureAlt}
                  className="project-slider-content-inner-picture"
                  ref={img}
                  key={id}
                />
              ))}
          </div>
        </div>
        <div className="project-slider-arrows" ref={arrows}>
          <div>
            <i
              className="project-slider-arrows-arrow project-slider-arrows-left"
              onClick={displayPicture}
            />
          </div>
          <div>
            <i
              className="project-slider-arrows-arrow project-slider-arrows-right"
              onClick={displayPicture}
            />
          </div>
        </div>
      </div>
      <div className="project-details">
        <h2 className="project-details-title">
          <Highlight attribute="name" hit={hit} />
        </h2>
        <p className="project-details-description">
          <Highlight attribute="description" hit={hit} />
        </p>
        {/* using conditional rendering, otherwise
        console says technology is undefined
        when I iterate it
        */}
        <div className="project-details-links">
          {hit.website && (
            <a
              className="project-details-links-link"
              href={hit.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          )}
          {hit.demo && (
            <a
              className="project-details-links-link"
              href={hit.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Démo
            </a>
          )}
          <a
            className="project-details-links-link"
            href={hit.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
