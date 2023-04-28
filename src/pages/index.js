import * as React from "react";
import NavbarIndex from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FrontPage from "../components/FrontPage";
import AboutMe from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hussain Alnakhli</title>
      </Helmet>
      <header>
        <section>
          <NavbarIndex />
        </section>
        <section>
          <FrontPage />
        </section>
        <section>
          <Sidebar />
        </section>
      </header>

      <main>
        <section
          id="About"
          className="about-fill"
          style={{
            minHeight: 400,
          }}
        >
          <AboutMe />
        </section>
        <section
          id="Projects"
          className="project-fill"
          style={{
            minHeight: 600,
            paddingTop: "80px",
            
          }}
        >
          <Projects />
        </section>
        <section
          id="Experience"
          className="experience-fill"
          style={{
            minHeight: 600,
            
          }}
        >
          <Experience />
        </section>

        <section
          id="Education"
          className="education-fill"
          style={{ minHeight: 600, marginBottom: "0px" }}
        >
          <Education />
        </section>

        <section id="Contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Index;
