import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { useState } from "react";

// Styles and Theme
import { darkTheme, lightTheme } from './utils/Themes';
import './App.css';

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import GlobalBackground from "./components/GlobalBackground";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`

const Section = styled.section`
  padding: 40px 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`

const ExperienceSection = styled.section`
  padding: 40px 0 0 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 30px 0 0 0;
  }
`

const ProjectsSection = styled.section`
  padding: 0 0 40px 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 0 30px 0;
  }
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
    return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalBackground />
        <Navbar />
        <Body>
          <HeroSection />          <Section>
            <Skills />
          </Section>          <ExperienceSection>
            <Experience />
          </ExperienceSection>
          <ProjectsSection>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </ProjectsSection>
          <Section>
            <Education />
          </Section>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
