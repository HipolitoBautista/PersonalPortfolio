import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  return (
    <Container>
      <FooterContent>
        <LeftContent data-aos="zoom-out" data-aos-duration="1500">
          <div className="Title">
            <h2>Hipolito Bautista</h2>
          </div>

          <div className="Links">
            <div className="SingleLink">
              <a
                href="https://www.linkedin.com/in/hipolito-bautista-409431234/"
                target="_blank"
              >
                <img src="../Assets/LinkedIn.png" alt="" className="Icon" />
              </a>

              <a href="https://github.com/HipolitoBautista" target="_blank">
                <img src="../Assets/Github.png" alt="" className="Icon" />
              </a>

              <a href="https://www.facebook.com/hip.bau.7/" target="_blank">
                <img src="../Assets/Facebook.png" alt="" className="Icon" />
              </a>

              <a href="https://www.instagram.com/hip_bau12/" target="_blank">
                <img src="../Assets/Insta.png" alt="" className="Icon" />
              </a>
            </div>
          </div>

          <div className="Details">
            <div className="DetailsContent">
              <h4>Email</h4>
              <p>hipbau11@gmail.com</p>
            </div>
            <div className="DetailsContent">
              <h4>Phone Number</h4>
              <p>+501 6367238</p>
            </div>
            <div className="DetailsContent">
              <h4>Address</h4>
              <p>2 Baboon Avenue</p>
              <p>City of Belmopan, Cayo</p>
              <p>Belize C.A.</p>
            </div>
          </div>
        </LeftContent>
        <RightContent
          id="ContactMe"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <h2>Take Me To Your Leader</h2>

          <form action="" method="POST">
            <input
              type="text"
              id="full_name"
              name="full_name"
              placeholder="Full Name"
              className="Field"
              required
            />

            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Phone Number"
              className="Field"
              required
            />

            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Description"
              className="Field"
              required
            ></textarea>

            <a>
              <input type="submit" value="Submit" />
            </a>
          </form>
        </RightContent>
      </FooterContent>
      <Nav />
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100vw;
  background-color: var(--Primary-Blue);
  color: var(--Primary-White);
  font-family: var(--Eina-Bold);

  .NavContainer {
    justify-content: flex-start !important;
    &::before {
      content: "";
      display: block;
      width: 90%;
      border-top: 2px solid var(--Primary-White);
      margin: 0 auto 1rem auto;
    }
  }
`;
const FooterContent = styled.div`
  width: 100vw;
  display: flex;
  padding: 4rem 0;
`;

const LeftContent = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .Title {
    font-size: 1.25rem;
  }

  .DetailsContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Details {
    display: flex;
  }

  .Details h4 {
    font-size: 1.25rem;
  }

  .Details p {
    font-family: var(--Eina-Regular-Italic);
    font-size: 1rem;
  }

  .Links {
    display: flex;

    justify-content: center;
    width: 60%;
  }

  .SingleLink img {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    margin: 0 0.5rem;
  }
`;
const RightContent = styled.div`
  flex: 0.5;

  a {
    position: relative;
    text-decoration: none;
    color: var(--Primary-White);
    width: fit-content;
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
  form {
    display: flex;
    flex-direction: column;
    width: 30vw;
  }
  .Field {
    all: unset;
    border-bottom: 1px solid rgba(217, 217, 217, 0.3);
    height: 2rem;
    margin: 0.5rem 0;
  }

  input {
    all: unset;
    font-family: var(--Eina-SemiBold);
    margin-top: 1rem;
  }
  form::placeholder,
  input::placeholder,
  textarea::placeholder {
    font-family: var(--Eina-Regular-Italic) !important;
    font-size: 1rem;
    color: #d9d9d9;
  }
`;
