import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";

import Project from "./Project";

import hideMobileMenu from "src/utils/hideMobileMenu";

import "./projects.scss";

const searchClient = algoliasearch(process.env.APP_ID, process.env.SEARCH_KEY);

const Projects = () => {
  return (
    <div className="projects" onClick={hideMobileMenu}>
      <div className="projects-title">
        <h2>Projets</h2>
      </div>
      <InstantSearch
        indexName={process.env.PROJECT_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox
          placeholder={'Rechercher un projet (ex. : "React", "messagerie")'}
          className="projects-search"
        />
        <Hits hitComponent={Project} className="projects-all" />
      </InstantSearch>
    </div>
  );
};

export default Projects;
