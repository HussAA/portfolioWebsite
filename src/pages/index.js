import * as React from "react";
import NavbarIndex from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FrontPage from "../components/FrontPage";
import AboutMe from "../components/About";
import Experience from "../components/Experience";

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
        <section className="about-fill"
          style={{
            paddingTop: "50px", 
            minHeight: 500,
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "50px"
          }}
        >
          <div id="About">
            <AboutMe />
          </div>
        </section>
        <section
          style={{
            minHeight: 600,
            marginBottom: "50px",}}
        >
          <div>
            <Experience />
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Index;
