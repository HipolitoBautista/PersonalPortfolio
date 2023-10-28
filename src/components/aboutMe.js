import React from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { UilArrowUpRight } from "@iconscout/react-unicons";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  return (
    <Container>
      <About id="AboutMe">
        {/* Content on the upper half of the page. */}
        <UpperContent data-aos="fade-up">
          {/* Large Header */}
          <h1>
            Pursuing <br />
            My Dreams <br /> with Passion.
          </h1>
          <List>
            {/* The beige list items found on the left */}
            <ListItem>
              <h4>LinkedIn</h4>
              <Unicons.UilArrowUpRight size="1.25rem" />
            </ListItem>

            <ListItem>
              <h4>Instagram</h4>
              <Unicons.UilArrowUpRight size="1.25rem" />
            </ListItem>

            <ListItem>
              <h4>Facebook</h4>
              <Unicons.UilArrowUpRight size="1.25rem" />
            </ListItem>
          </List>

          <img src="../Assets/AboutMeImg.png" alt="Hipolito Bautista" />
        </UpperContent>

        {/* Content on the lower half of the page */}
        <LowerContent data-aos="fade-up">
          <p>
            I am Hipolito Bautista, a Web Developer based in Belmopan, Belize. I
            am Equipped with a comprehensive understanding of both front-end and
            back-end development. I possess the expertise to develop
            user-centric software solutions for you. Passionate about using
            technology to drive meaningful change, I am committed to delivering
            high-quality products that exceed client expectations. Let's
            collaborate and bring your software ideas to life.
          </p>

          <p>
            I earned my Associate's Degree from the University of Belize.
            Currently, I am pursuing my Bachelor's degree, further honing my
            skills and expanding my knowledge in the field. I firmly believe
            that the pursuit of knowledge is a lifelong journey, and I actively
            seek opportunities to expand my skills and expertise.
          </p>
        </LowerContent>
      </About>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  width: 100vw;
  height: auto;
`;
const About = styled.div`
  margin: 8rem 4rem;
  display: flex;
  flex-direction: column;
`;
const UpperContent = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  h1 {
    max-width: 50vw;
    font-family: var(--Eina-SemiBold);
    font-size: 6rem;
    color: var(--Primary-Blue);
    position: absolute;
    right: 0;
    left: 0;
    z-index: 2;
    margin-top: 2rem;
  }

  img {
    width: 100%;
    max-width: 70vw;
    height: auto;
  }
`;

const List = styled.div`
  align-self: flex-end;
  margin-right: auto;
  width: 18rem;
`;
const ListItem = styled.a`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  justify-items: flex-end;
  margin-right: auto;
  width: 100%;

  font-family: var(--Eina-SemiBold);
  font-size: 1.25rem;
  color: var(--Beige);

  position: relative;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--Beige);
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 0%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
const LowerContent = styled.div`
  column-count: 2;
  column-gap: 1rem;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  width: 70vw;
  gap: 5rem;
  margin-top: 2.5rem;

  p {
    break-inside: avoid;
    font-family: var(--Eina-Regular);
    font-size: 1em;
    flex: 0.4;
  }
`;
