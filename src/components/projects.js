import React from "react";
import styled from "styled-components";
import IndividualProjects from "./individualProject.js";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  return (
    <Container id="Projects">
      <ProjectsArea data-aos="fade-up">
        <IndividualProjects
          image="../Assets/Netflix.png"
          title="Netflix Clone"
          subTitle="Tutorial Based"
          primaryColor="#DA1F26"
        />
        <IndividualProjects
          image="../Assets/Disney.png"
          title="Disney+ Clone"
          subTitle="Tutorial Based"
          primaryColor="#00E6F5"
        />

        <IndividualProjects
          image="../Assets/Spotify.png"
          title="Spotify Clone"
          subTitle="Tutorial Based"
          primaryColor="#1ED760"
        />

        <IndividualProjects
          image="../Assets/OSIPP.png"
          title="OSIPP Portal"
          subTitle="Self Developed"
          primaryColor="#1ED760"
        />

        <IndividualProjects
          image="../Assets/SushiMan.png"
          title="SushiMan Website"
          subTitle="Tutorial Based"
          primaryColor="#B1454A"
        />

        <IndividualProjects
          image="../Assets/Tiktok.png"
          title="Tiktok Auto-Uploader"
          subTitle="Self Developed"
          primaryColor="#27F5ED"
        />

        <IndividualProjects
          image="../Assets/PersonalProject.png"
          title="Personal Portfolio Website"
          subTitle="Self Developed"
          primaryColor="#fff"
          invert="true"
        />

        <IndividualProjects
          image="../Assets/ACM.png"
          title="ACM Site Contributor"
          subTitle="Self Developed"
          primaryColor="#097BD9"
          invert="true"
        />

        <IndividualProjects
          image="../Assets/NEMO.png"
          title="SIREN Prep & Recovery"
          subTitle="Self Developed"
          primaryColor="#2E4EFE"
        />
      </ProjectsArea>
    </Container>
  );
}

export default Projects;

const Container = styled.div``;
const ProjectsArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;
