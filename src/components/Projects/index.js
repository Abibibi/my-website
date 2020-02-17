import React from 'react';

import './projects.scss';
import gitHubLogo from 'src/styles/assets/images/github_logo.png';
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
        />
      ))}
    </div>
  </div>
);


export default Projects;
