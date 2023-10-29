import React from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { scrollToSection } from "../helpers/utilities";
function Nav() {
  return (
    <Container className="NavContainer">
      <NavBar>
        <NavItem>
          <Unicons.UilCoffee size="1.1rem" color="var(--Primary-White)" />
          <a onClick={() => scrollToSection("AboutMe")}>About Me</a>
        </NavItem>
        <NavItem>
          <Unicons.UilBracketsCurly
            size="1.1rem"
            color="var(--Primary-White)"
          />
          <a onClick={() => scrollToSection("Projects")}>Projects</a>
        </NavItem>
        <NavItem>
          <Unicons.UilPuzzlePiece size="1.1rem" color="var(--Primary-White)" />
          <a onClick={() => scrollToSection("Skills")}>Skills</a>
        </NavItem>
        <NavItem>
          <Unicons.UilCommentsAlt size="1.1rem" color="var(--Primary-White)" />
          <a onClick={() => scrollToSection("ContactMe")}>Contact Me</a>
        </NavItem>
      </NavBar>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100vw;
  height: 4.5rem;
  background-color: var(--Primary-Blue);
  color: var(--Primary-White);
  font-family: var(--Eina-Regular);
  font-size: 1.1rem;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  a {
    position: relative;
    text-decoration: none;
    color: var(--Primary-White);
  }

  a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--Primary-White);
    transition: width 0.3s ease-in-out;
  }

  a:hover::before {
    width: 100%;
  }
`;
