import React from "react";
import styled from "styled-components";
import IndividualProjects from "./individualProject.js";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects({ onOpen, openModalHandlerProp }) {
  return (
    <Container id="Projects">
      <ProjectsArea data-aos="fade-up">
        <IndividualProjects
          description="The Netflix clone marked my introduction to the world of APIs. It was a crucial project that granted me valuable insights into harnessing API functionality. This undertaking served as an opportunity for me to deepen my understanding of utilizing API communication and their respective documentation."
          image="../Assets/Netflix.png"
          title="Netflix Clone"
          subTitle="Tutorial Based"
          primaryColor="#DA1F26"
          btn1="Live Demo"
          btn1link="https://netflix-clone-ab1b7.web.app/"
          btn2="Source Code"
          btn2link="https://github.com/HipolitoBautista/Netflix-Browse-Clone"
          tech1="ReactJS"
          tech2="Firebase"
          tech3="MovieDB-API"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
        />
        <IndividualProjects
          description="My first tutorial based application which facilitated the refinement of my skills in Javascript, HTML, CSS and React. Through this experience, I was able to significantly bolster my capabilities in these essential technologies."
          image="../Assets/Disney.png"
          title="Disney+ Clone"
          subTitle="Tutorial Based"
          primaryColor="#00E6F5"
          btn1="Live Demo"
          btn1link="https://disneyplus-clone-4689c.web.app/"
          btn2="Source Code"
          btn2link="https://github.com/HipolitoBautista/DisneyClone"
          tech1="ReactJS"
          tech2="Firestore"
          tech3="Google OAuth"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
        />
        <IndividualProjects
          description="The  development of the Spotify clone project significantly enhanced my familiarity with APIs, keys, and authorization. By utilizing Spotify's advanced API , I gained exposure to a higher level of functionality compared to my previous experiences, ultimately serving as a pivotal foundation for undertaking more ambitious and substantial projects."
          image="../Assets/Spotify.png"
          title="Spotify Clone"
          subTitle="Tutorial Based"
          primaryColor="#1ED760"
          btn1="Live Demo"
          btn1link="https://spotify-clone-453d0.web.app/"
          btn2="Source Code"
          btn2link="https://github.com/HipolitoBautista/Spotify-Clone"
          tech1="ReactJS"
          tech2="Firebase"
          tech3="SpotifyAPI"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
        />
        <IndividualProjects
          description=" The OSIPP Project represented a significant milestone in my professional journey as it was my first full-scale endeavor utilizing the Go programming language. Moreover, it provided me with invaluable exposure to the intricacies of web application deployment, specifically through the utilization of the DigitalOcean platform."
          image="../Assets/OSIPP.png"
          title="OSIPP Portal"
          subTitle="Self Developed"
          primaryColor="#1ED760"
          btn1="Source Code"
          btn1link="https://github.com/HipolitoBautista/SEFinal"
          btn2="Live Demo"
          btn2link=""
          tech1="Boostrap"
          tech2="GoLang"
          tech3="DigitalOcean"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
        />
        <IndividualProjects
          description="The SushiMan project was a large step in enhancing my expertise in page and scroll animations. Additionally, it served as a valuable opportunity to strengthen my grasp of responsive web development, a concept I was actively working on at the time. This project significantly bolstered my skills in both these areas."
          image="../Assets/SushiMan.png"
          title="SushiMan Website"
          subTitle="Tutorial Based"
          primaryColor="#B1454A"
          btn1="Live Demo"
          btn1link="https://sushi-webapp.web.app/"
          btn2="Source Code"
          btn2link="https://github.com/HipolitoBautista/hipolitobautista.github.io"
          tech1="AOS Animations"
          tech2="HTML"
          tech3="CSS"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
        />
        <IndividualProjects
          description="The TikTok auto-uploader was my first venture into automation. As TikTok boomed, I saw the opportunity to introduce automation to this new social media platform. What began as a simple idea for automatically posting videos to a single channel soon expanded. It developed it into a system capable of uploading content to multiple channels. Uploads are now scheduled for different times every day. This project remains a work in progress, with additional features in the pipeline. Currently running 24/7, hosted on RDP VPS"
          image="../Assets/Tiktok.png"
          title="Tiktok Auto-Uploader"
          subTitle="Self Developed"
          primaryColor="#27F5ED"
          btn1="Video Demo"
          btn1link=""
          btn2="Source Code"
          btn2link=""
          tech1="Python"
          tech2="Selenium"
          tech3="VPS Hosting"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
        />
        <IndividualProjects
          description="I crafted my personal portfolio during an intensive four-day sprint, dedicating a total of 42 hours to its design and development. The entire portfolio, from conception to execution, was a solo endeavor. I utilized Figma for the project design and React for its development. This project served as a testament to my programming skills and pushed my boundaries. It shows my ability to see a development project through from inception to completion."
          image="../Assets/PersonalProject.png"
          title="Personal Portfolio Website"
          subTitle="Self Developed"
          primaryColor="#fff"
          btn1="Design File"
          btn1link="https://www.figma.com/file/soY89xQL5mKEN6q1sFCTVC/HB-Website-Final?type=design&node-id=1%3A92&mode=design&t=rDJE41K280o5gPjP-1"
          btn2=""
          btn2link=""
          tech1="React"
          tech2="Figma"
          tech3="AOS Animations"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="true"
        />
        <IndividualProjects
          description="The development of the UB-ACM website was a collaborative project. This semester, the Web Development team aimed to revamp the entire website. Our first step towards this revamp was the development of a design file. I spearheaded this aspect of the project by developing a style guide and homepage.  This project is currently still in development. At the end of this project, I hope to improve my collaboration skills by gaining practical experience with the web dev team. "
          image="../Assets/ACM.png"
          title="ACM Site Contributor"
          subTitle="Self Developed"
          primaryColor="#097BD9"
          btn1="Design File"
          btn1link="https://www.figma.com/file/T6ahWMMZ1KyPoa5PdRlnCD/UB-ACM-HOMEPAGE---FINAL?type=design&node-id=0%3A1&mode=design&t=OUuQVlKB4uFZHGxa-1"
          btn2=""
          btn2link=""
          tech1="Figma"
          tech2="Web Design"
          tech3="Wireframes"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="true"
        />
        <IndividualProjects
          description="The Siren project was a  storm prevention, warning, and recovery application. It came to life as a requirement for the HCI course at the University of Belize, where I was tasked with creating a prototype for this application. This endeavor demanded research into the application's necessary features. As part of this research, we worked with representatives from NEMO to gather valuable insights. The resulting prototype was crafted using Figma, marking a crucial step in the project's development."
          image="../Assets/NEMO.png"
          title="SIREN Prep & Recovery"
          subTitle="Self Developed"
          primaryColor="#2E4EFE"
          btn1="Design File"
          btn1link="https://www.figma.com/file/qNetbwcMnz2XpekREIJi3d/Mid-level-Prototype?type=design&node-id=0%3A1&mode=design&t=Rsg6JYZLnFXJ7nzL-1"
          btn2=""
          btn2link=""
          tech1="Figma"
          tech2="Feature Research"
          tech3="User-Focused Development"
          onOpenTriggered={onOpen}
          openModalHandler={openModalHandlerProp}
          invert="false"
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
