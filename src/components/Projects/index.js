import React from 'react';

import './projects.scss';
import projects from 'src/data/projects';
import Project from './Project';


const Projects = () => (
  <div className="projects">
    <h1 className="projects-title">Projets</h1>
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
