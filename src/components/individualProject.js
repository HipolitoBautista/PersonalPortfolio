import React from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import AOS from "aos";
import "aos/dist/aos.css";
import useModal from "../modals/useModal.js";
import Modal from "./modal.js";

function IndividualProjects({
  description,
  image,
  title,
  subTitle,
  primaryColor,
  btn1,
  btn1link,
  btn2,
  btn2link,
  tech1,
  tech2,
  tech3,
  onOpenTriggered,
  openModalHandler,
  invert,
}) {
  const { openModal, setOpenModal } = useModal();

  const projectDetailsColor =
    invert == "true" ? "var(--Primary-Blue)" : "var(--Primary-White)";

  const handleProjectClick = () => {
    openModalHandler(
      description,
      image,
      title,
      subTitle,
      primaryColor,
      btn1,
      btn1link,
      btn2,
      btn2link,
      tech1,
      tech2,
      tech3
    );
    onOpenTriggered();
    document.documentElement.style.overflow = "hidden";
  };

  return (
    <IndividualProject data-aos="fade-up" onClick={handleProjectClick}>
      <div>
        <img src={image} alt="" />
      </div>

      <ProjectDetails color={projectDetailsColor}>
        <div className="Content">
          <h4 className="Title">{title}</h4>
          <p className="SubTitle">{subTitle}</p>
        </div>

        <a onClick={handleProjectClick}>
          <Unicons.UilArrowUpRight
            size="1.25rem"
            color="var(--Primary-Blue)"
            className="Icon"
          />
        </a>
      </ProjectDetails>
    </IndividualProject>
  );
}

export default IndividualProjects;

const IndividualProject = styled.div`
  width: 30vw;
  height: auto;
  margin: 0.5rem;
  position: relative;
  border-radius: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(2);
  }
`;

const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  position: absolute;
  top: 0;
  margin: 1.25rem 1.25rem;
  width: 90%;
  color: ${(props) => props.color};

  .Title {
    font-family: var(--Eina-SemiBold);
    font-size: 1.25rem;
  }

  .SubTitle {
    font-family: var(--Eina-Regular);
    font-size: 1rem;
  }

  .Icon {
    border: none;
  }

  a {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
