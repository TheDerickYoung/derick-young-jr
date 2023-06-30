import React from "react";
import "./home.css";
import Data from "./Data";
import TechSkills from "./TechSkills";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <h1 className="invisibility-cloak">hello</h1>

          <div className="home__img"></div>

          <Data />
        </div>

        <TechSkills />
      </div>
    </section>
  );
};

export default Home;
