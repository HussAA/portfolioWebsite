import * as React from "react";
import NavbarIndex from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FrontPage from "../components/FrontPage";
import AboutMe from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Index = () => {
  return (
    <>
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
          id="Experience"
          className="experience-fill"
          style={{
            minHeight: 600,
            marginBottom: "100px",
          }}
        >
          <Experience />
        </section>

        <section
          id="Projects"
          className="projects-fill"
          style={{
            minHeight: 600,
            marginBottom: "50px",
            marginLeft:"50px",
            marginRight: "50px"
          }}
        >
          <Projects />
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Index;
