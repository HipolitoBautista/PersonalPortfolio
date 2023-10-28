import "./App.css";
import Hero from "./components/hero.js";
import AboutMe from "./components/aboutMe.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
