import React from 'react';

import './projects.scss';
import gitHubLogo from 'src/styles/assets/images/github_logo.png';
import Project from './Project';

const Projects = ({ projects }) => (
  <div className="projects">
    <h1 className="projects-title">J'ai travaillé à la conception (cahier des charges, prototypage,
      user stories, modèle conceptuel de données)
      et au développement des applications ci-dessous, en équipe ou seule.
    </h1>
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
    <p className="projects-github">Plus de projets sur mon GitHub :
      <img className="projects-github-picture" src={gitHubLogo} alt="logo Github" />
      <a
        className="projects-github-link"
        href="https://github.com/Abibibi"
        target="_blank"
        rel="noopener noreferrer"
      >
        /Abibibi
      </a>
    </p>
  </div>
);


export default Projects;
