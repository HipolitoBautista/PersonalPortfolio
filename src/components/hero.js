import React from "react";
import "../index.css";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";

function hero() {
  return (
    <Container>
      <Hero>
        {/* Container with all the left side content */}
        <LeftContent>
          <h1>
            <span>Hello World,</span>
            <br></br> Meet
            <br></br>Hipolito.
          </h1>

          <p>
            Driven by a profound passion for technology's potential to enact
            meaningful change.
          </p>
          {/* Call to action (CTA) */}
          <CTA>
            {/* Contact Me Btn */}
            <PrimaryBtn>Contact Me</PrimaryBtn>

            {/* Who Am I Btn */}
            <SecondaryBtn>
              <img src="../Assets/ios-play.svg"></img>
              <div>
                Who Am I<hr></hr>
              </div>
            </SecondaryBtn>
          </CTA>
        </LeftContent>

        {/* Container with all the right side content */}
        <RightContent>
          {/* Supplimental Content Container */}
          <SupplimentalContainer>
            <h4>Turning Your ideas into digital solutions</h4>
            <div className="RoundButton"></div>
          </SupplimentalContainer>

          {/* Main Images on the right side of page */}
          <MainImage>
            <img
              src="../Assets/HeroImg.png"
              className="HeroImg"
              alt="Hero Image"
            />
            <img
              src="../Assets/HeroImg-Background.png"
              className="HeroBackground"
              alt="Hero Image Background"
            />
          </MainImage>

          {/* Short Description of services provided */}
          <ServiceDescriptions>
            <div className="DescriptionsContainer">
              <div className="DescriptionContent">
                <div className="Title">
                  <Unicons.UilReact size="20px" className="Icon" />
                  <h4>Web Development</h4>
                </div>
                <p className="Description">
                  My development services are your compass in a fast pace world,
                  ensuring you stay at the forefront of progress.
                </p>
              </div>

              <div className="DescriptionContent">
                <div className="Title">
                  <Unicons.UilReact size="20px" className="Icon" />
                  <h4>Design</h4>
                </div>
                <p className="Description">
                  My Design services provide sleek, user friendly solutions to
                  bridge any gap. Show the world your open to business.
                </p>
              </div>
            </div>
          </ServiceDescriptions>
        </RightContent>
      </Hero>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
`;

const Hero = styled.div`
  margin: 8rem 4rem;
  display: flex;
  width: 100vw;
`;

const RightContent = styled.div`
  flex: 5;
  width: 100%;
  height: 100%;
  position: relative;
`;

const MainImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    width: 24rem;
    height: 28rem;
    object-fit: contain;
    position: absolute;
    top: 0;
    right: 0;
  }

  .HeroImg {
    margin: 1.5rem 3.5rem 0 0;
    z-index: 1;
  }

  .HeroBackground {
    margin-top: 5rem;
    z-index: -1;
  }
`;

const SupplimentalContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 11rem;
  left: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 13rem;
  height: 12rem;
  padding: 1.75rem;
  box-sizing: border-box;
  font-family: var(--Eina-Bold);
  font-size: 0.9rem;
  background-color: var(--Primary-Blue);
  color: var(--Primary-White);
  border-radius: 1.75rem;
  margin-top: 15rem;

  h4 {
    max-width: 80%;
  }
`;

const ServiceDescriptions = styled.div`
  font-family: var(--Eina-Regular);
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  .DescriptionsContainer {
    display: flex;
    justify-content: space-between;
  }
  .DescriptionContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 0.45;
    gap: 1rem;
  }
  .Title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-family: var(--Eina-Bold);
    font-size: 1.5rem;
  }
`;

const LeftContent = styled.div`
  flex: 4;
  color: var(--Primary-Blue);
  font-family: var(--Eina-Regular);
  h1 {
    font-family: var(--Eina-Bold);
    font-size: 6rem;
    margin: 1rem 0;
  }
  h1 span {
    font-family: var(--Eina-Regular-Italic);
  }

  p {
    max-width: 80%;
    font-size: 1.5rem;
    max-width: 35rem;
  }
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-family: var(--Eina-SemiBold);
  font-size: 1.25rem;
  width: 100%;
  margin: 4rem 0;
  max-width: 30rem;
`;

const PrimaryBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Primary-White);
  background-color: var(--Primary-Blue);
  border-radius: 500px;
  width: 13rem;
  height: 4rem;
`;

const SecondaryBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 3rem;
  gap: 1rem;
  hr {
    width: 100%;
    color: var(--Primary-Blue);
  }

  img {
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--Primary-Blue);
    border-radius: 100px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
    color: var(--Primary-Blue);
  }
`;
export default hero;
