import React from 'react';

import './projects.scss';

const Project = ({
  name,
  description,
  website,
  demo,
  github,
}) => (
  <div className="project">
    <div className="project-slider">
      
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
        <a
          className="project-details-links-link"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Démo
        </a>
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
