import "./App.css";
import Hero from "./components/hero.js";
import AboutMe from "./components/aboutMe.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";
import Footer from "./components/footer.js";
function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
