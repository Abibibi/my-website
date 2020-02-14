import React from 'react';

import './projects.scss';

const Project = ({
  id,
  name,
  description,
  technology,
  website,
  demo,
  github,
}) => (
  <div className="project">
    <div className="project-slider">
      
    </div>
    <div className="project-details">
      <h2>{name}</h2>
      <p>{description}</p>
      {/* using conditional rendering, otherwise
      console says technology is undefined
      when I iterate it
      */}
      <p>Technologies utilisées : {technology && technology.map((tech) => tech).join(', ')}</p>
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
