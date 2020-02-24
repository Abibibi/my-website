import React from 'react';

import './projects.scss';
import Project from './Project';

const Projects = ({ projects }) => (
  <div className="projects">
    <div className="projects-all">
      {projects.map(({
        id,
        name,
        description,
        technology,
        website,
        demo,
        github,
        pictures,
      }) => (
        <Project
          id={id}
          name={name}
          description={description}
          technology={technology}
          website={website}
          demo={demo}
          github={github}
          key={id}
          pictures={pictures}
        />
      ))}
    </div>
  </div>
);


export default Projects;
