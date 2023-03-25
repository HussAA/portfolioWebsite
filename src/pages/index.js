import * as React from "react";
import NavbarIndex from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FrontPage from "../components/FrontPage";
import AboutMe from "../components/About";

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

      <main style={{ marginTop:"50px"}}>
        <section style={{ minHeight: 600, marginBottom: "50px" }}>
          <div id="About">
            <AboutMe />
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Index;
