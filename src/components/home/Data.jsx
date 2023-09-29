import React from "react";
import Social from "./Social";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Hi, I'm Derick 👋</h1>
      {/*<h3 className="home__subtitle">Frontend Developer</h3>*/}
      <p className="home__description">
        Innovative <strong>Software Engineer</strong> with a demonstrated
        history in developing and implementing cutting-edge web solutions for
        various industries, including mortgage, retail, and transportation.
        Skilled in solving problems with full-stack web development technologies
        such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and SQL.
      </p>
      <Social />
    </div>
  );
};

export default Data;
