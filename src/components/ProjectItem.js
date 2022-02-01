import React from "react";
import styled from "styled-components";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    border: 3px solid var(--pink);
    justify-content: center;
    background-color: var(--deep-dark);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }

  .projectItem__desc__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  .linkButton {
    background-color: var(--teal);
    color: black;
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = { img },
  title = "Project Name",
  desc = "desc",
  deployed_url = "deployed_url",
  github_url = "github_url",
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>

        <p className="projectItem__desc">{desc}</p>

        <div className="projectItem__desc__buttons">
          <a target="blank" className="liveLinkButton" href={deployed_url}>
            <input className="linkButton" type="submit" value="Live Link" />
          </a>
          <a target="blank" className="githubLinkButton" href={github_url}>
            <input className="linkButton" type="submit" value="GitHub Link" />
          </a>
        </div>
      </div>
    </ProjectItemStyles>
  );
}
