import * as React from "react";
import NavbarIndex from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <>
      <section>
        <div>
          <NavbarIndex />
        </div>
      </section>

      <section>
        <div>
          <Sidebar/>
        </div>
      </section>
    </>
  );
};

export default Index;
