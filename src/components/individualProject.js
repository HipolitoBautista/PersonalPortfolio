import React from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";

function IndividualProjects({ image, title, subTitle, primaryColor, invert }) {
  const projectDetailsColor =
    invert == "true" ? "var(--Primary-Blue)" : "var(--Primary-White)";

  return (
    <IndividualProject>
      <div>
        <img src={image} alt="" />
      </div>

      <ProjectDetails color={projectDetailsColor}>
        <div className="Content">
          <h4 className="Title">{title}</h4>
          <p className="SubTitle">{subTitle}</p>
        </div>

        <div>
          <Unicons.UilArrowUpRight
            size="1.25rem"
            color="var(--Primary-Blue)"
            className="Icon"
          />
        </div>
      </ProjectDetails>
    </IndividualProject>
  );
}

export default IndividualProjects;

const IndividualProject = styled.div`
  width: 30vw;
  height: auto;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
`;
