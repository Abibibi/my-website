import React, { useState, useEffect, useRef } from 'react';

import './projects.scss';

const Project = ({
  name,
  description,
  website,
  demo,
  github,
  pictures,
}) => {
  const slider = useRef(null);
  const sliderContent = useRef(null);
  const sliderContentInner = useRef(null);
  const img = useRef(null);
  let deltaX = 0;

  const displayPicture = (event) => {
    if (event.target.className.includes('left') || event.keyCode === 37) {

      console.log('left pressed');

      deltaX -= img.current.width;
	    deltaX %= pictures.length*img.current.width;

      console.log(deltaX);

      if (deltaX < 0) {
        deltaX = 0;
      }
    }
    else {
      console.log('right pressed');

      deltaX += img.current.width;
      deltaX %= pictures.length*img.current.width;
      
      console.log(deltaX);
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
      <div ref={slider} className="project-slider" tabIndex="-1">
        <div ref={sliderContent} className="project-slider-content">
          <div ref={sliderContentInner} className="project-slider-content-inner">
            {pictures && pictures.map(({ id, pictureContent, pictureAlt }) => (
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
        <div className="project-slider-arrows">
          <div><i className="project-slider-arrows-arrow project-slider-arrows-left" onClick={displayPicture} /></div>
          <div><i className="project-slider-arrows-arrow project-slider-arrows-right" onClick={displayPicture} /></div>
        </div>
      </div>
      <div className="project-details">
        <h2 className="project-details-title">{name}</h2>
        <p className="project-details-description">{description}</p>
        {/* using conditional rendering, otherwise
        console says technology is undefined
        when I iterate it
        */}
        <div className="project-details-links">
          {website && (
          <a
            className="project-details-links-link"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site
          </a>
          )}
          {demo && (
          <a
            className="project-details-links-link"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Démo
          </a>
          )}
          <a
            className="project-details-links-link"
            href={github}
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
