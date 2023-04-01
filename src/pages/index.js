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
          <div>
            <AboutMe />
          </div>
        </section>

        <section
          id="Experience"
          style={{
            minHeight: 600,
            marginBottom: "50px",
          }}
        >
          <div>
            <Experience />
          </div>
        </section>
        <section
          id="Projects"
          style={{
            minHeight: 600,
            marginBottom: "50px",
          }}
        >
          <div>
            <Projects />
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Index;
