import React from 'react';

import './projects.scss';

const Project = ({
  name,
  description,
  website,
  demo,
  github,
  pictures,
}) => (
  <div className="project">
    {/* tabIndex property to make sure
    that onfocus on div, if left and
    right arrow keys are pressed,
    previous or next picture is showed
    respectively */}
    <div className="project-slider" tabIndex="-1">
      <div className="project-slider-container">
        <div className="project-slider-container-inner">
          {pictures && pictures.map(({ pictureContent, pictureAlt }) => (
            <img src={pictureContent} alt={pictureAlt} className="project-slider-container-inner-picture" />
          ))}
        </div>
      </div>
      <div className="project-slider-arrows">
        <div><i className="project-slider-arrows-arrow project-slider-arrows-left" /></div>
        <div><i className="project-slider-arrows-arrow project-slider-arrows-right" /></div>
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


export default Project;
