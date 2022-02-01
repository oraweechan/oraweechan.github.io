import React from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import projects from "../data/projects";
import ProjectItem from "../components/ProjectItem";
import { useState, useEffect } from "react";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .searchIcon {
    position: absolute;
    width: 2rem;

    right: 0rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--gold);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [projectsData, setProjectsData] = useState(projects);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") return;
    setProjectsData(() =>
      projects.filter((item) =>
        item.title.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(projects);
    }
  };

  return (
    <ProjectsStyles>
      <div>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <div className="projects__searchBar">
            <form>
              <input
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
                type="text"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
              deployed_url={item.deployed_url} 
              github_url={item.github_url}
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </ProjectsStyles>
  );
}
