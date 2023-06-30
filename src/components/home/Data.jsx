import React from "react";
import Social from "./Social";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Welcome 👋</h1>
      {/*<h3 className="home__subtitle">Frontend Developer</h3>*/}
      <p className="home__description">
        I'm Derick, a passionate and dedicated frontend developer crafting
        exceptional web experiences. Currently based in Southern-California 📍
      </p>
      <Social />
    </div>
  );
};

export default Data;
