import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <a
        href={item.demo}
        className="work__button"
        target="_blank"
        rel="noreferrer"
      >
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon "></i>
      </a>
      <a
        href={item.sourceCode}
        className="work__button"
        target="_blank"
        rel="noreferrer"
      >
        Code
        <i className="uil uil-github"></i>
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
