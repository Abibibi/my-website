import React from 'react';

import './projects.scss';
import hideMobileMenu from 'src/utils/hideMobileMenu';
import projects from 'src/data/projects';
import Project from './Project';


const Projects = () => (
  <div className="projects" onClick={hideMobileMenu}>
    <div className="projects-title"><h2>Projets</h2></div>
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
