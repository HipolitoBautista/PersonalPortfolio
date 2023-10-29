import React from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ ModalDataProps, open, onClose }) => {
  if (!open) return null;
  const handleClick = () => {
    document.documentElement.style.overflow = "unset";
    onClose();
  };
  return (
    <Overlay data-aos="zoom-out" data-aos-duration="1000">
      <ModalContainer primaryColor={ModalDataProps.primaryColor}>
        {/* Content on the top of the popup */}
        <TopContent>
          <img src={ModalDataProps.image} alt={ModalDataProps.title} />
          <a onClick={handleClick}>
            {" "}
            <Unicons.UilX size="4rem" color="var(--Primary-White)" />
          </a>
        </TopContent>

        {/* Content on the bottom of the popup */}
        <BottomContent>
          <Title>
            <h4>{ModalDataProps.title}</h4>
            <p className="primaryColor">{ModalDataProps.subTitle}</p>
          </Title>
          {/* Call to actions */}
          <CTA>
            <a href={ModalDataProps.btn1link} target="_blank">
              <PrimaryBtn>{ModalDataProps.btn1}</PrimaryBtn>
            </a>
            <a
              href={ModalDataProps.btn2}
              target="_blank"
              className={ModalDataProps.btn2 === "" ? "hidden" : ""}
            >
              <SecondaryBtn>{ModalDataProps.btn2}</SecondaryBtn>
            </a>

            <p className="Description">{ModalDataProps.description}</p>
          </CTA>

          {/* A list of the tech used */}
          <TechUtalized className="primaryColor">
            <h6>{ModalDataProps.tech1}</h6>
            <div className="dot"></div>
            <h6>{ModalDataProps.tech2}</h6>
            <div className="dot"></div>
            <h6>{ModalDataProps.tech3}</h6>
          </TechUtalized>
        </BottomContent>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  width: 50%;
  height: calc(100vh - 10%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Primary-Blue);
  color: var(--Primary-White);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  .primaryColor {
    color: ${(props) => props.primaryColor} !important;
  }
  .dot {
    background-color: ${(props) => props.primaryColor} !important;
  }
  .hidden {
    display: none;
  }
`;

const TopContent = styled.div`
  width: 100%;
  height: 40%;
  background-color: var(--Primary-Blue);
  align-self: flex-start;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  position: relative;

  a {
    position: fixed;
    top: 1rem;
    right: 1rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
`;
const BottomContent = styled.div`
  width: 100%;
  height: auto;
  padding: 3rem;
  box-sizing: border-box;
  flex: 0.7;
  overflow-y: scroll;

  .Description {
    font-family: var(--Eina-Regular);
    font-size: 1.1rem;
    width: 85%;
    margin-top: 2rem;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  h4 {
    font-family: var(--Eina-Bold);
    font-size: 1.25rem;
  }
  p {
    font-family: var(--Eina-Regular);
    font-size: 1rem;
  }
`;

const CTA = styled.div`
  font-family: var(--Eina-SemiBold);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    width: 100%;
    text-decoration: none;
  }
`;

const PrimaryBtn = styled.div`
  width: 100%;
  border-radius: 1.75rem;
  background-color: var(--Primary-White);
  color: var(--Primary-Blue);
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const SecondaryBtn = styled.div`
  width: 100%;
  border-radius: 1.75rem;
  border: 1px solid var(--Primary-White);
  color: var(--Primary-White);
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const TechUtalized = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: var(--Eina-SemiBold);
  gap: 0.5rem;
  margin-top: 1rem;

  .dot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
  }
`;
