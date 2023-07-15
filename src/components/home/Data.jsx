import React from "react";
import Social from "./Social";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Hi, I'm Derick 👋</h1>
      {/*<h3 className="home__subtitle">Frontend Developer</h3>*/}
      <p className="home__description">
        A passionate and dedicated{" "}
        <strong>software engineer with 4 years of experience</strong>,
        specializing in crafting exceptional web experiences. Currently based in
        Southern-California 📍
      </p>
      <Social />
    </div>
  );
};

export default Data;
