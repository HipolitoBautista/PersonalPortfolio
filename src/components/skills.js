import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  return (
    <Container id="Skills">
      <h1>My Best Shot at Impressing you</h1>
      <IndividualSkill>
        <img
          src="../Assets/HtmlIcon.svg"
          alt="HTML Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/CSSIcon.svg"
          alt="CSS Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/JavascriptIcon.svg"
          alt="JavaScript Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/ReactIcon.svg"
          alt="React Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/GoIcon.svg"
          alt="Go Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/PHPIcon.svg"
          alt=""
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/C++Icon.svg"
          alt="C++ Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/DockerIcon.svg"
          alt="Docker Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/DigitalOceanIcon.svg"
          alt="Digital Ocean"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/FirebaseIcon.svg"
          alt="Firebase Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/GithubIcon.svg"
          alt="Github Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../Assets/FigmaIcon.svg"
          alt="Figma Icon"
          className="SkillIcon"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
      </IndividualSkill>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: var(--Eina-Bold);
    font-size: 4rem;
    color: var(--Primary-Blue);
    margin-top: 4rem;
  }
`;
const IndividualSkill = styled.div`
  margin: 4rem 4rem;
  display: flex;
  justify-content: center;
  width: 65vw;
  flex-wrap: wrap;
  gap: 6rem;

  .SkillIcon {
    width: auto;
    height: 4rem;
  }
`;
