import "./App.css";
import React, { useState } from "react";
import Hero from "./components/hero.js";
import AboutMe from "./components/aboutMe.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
import useModal from "./modals/useModal.js";
import Modal from "./components/modal.js";
import styled from "styled-components";

function App() {
  const { openModal, setOpenModal } = useModal();
  const [modalData, setModalData] = useState({});

  const openModalHandler = (
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
  ) => {
    setModalData({
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
    });
    setOpenModal(true);
  };

  return (
    <div className="App">
      <Container>
        <Nav />
        <Hero />

        <AboutMe />
        <div>
          {/* <button }></button> */}
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            ModalDataProps={modalData}
          />
        </div>
        <Projects
          onOpen={() => setOpenModal(true)}
          openModalHandlerProp={openModalHandler}
        />
        <Skills />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div``;
