import React from "react";
import "../App.css";

export const Project = () => {
  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/blog1.svg" alt="Search" />
        <div className="main_in">
          <h1>Our Projects</h1>
          <p>Home/Projects</p>
        </div>
      </div>
      <div className="project_cont">
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/blocpic1.svg"
            alt="logo"
          />
          <br />
          <b>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        {/* <br /> */}
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project3.svg"
            alt="logo"
          />
          <br />
          <b>Minimal Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        {/* <br /> */}
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project4.svg"
            alt="logo"
          />
          <br />
          <b>Classic Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        <br />
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project5.svg"
            alt="logo"
          />
          <br />
          <b>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project11.svg"
            alt="logo"
          />
          <br />
          <b>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project22.svg"
            alt="logo"
          />
          <br />
          <b>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project33.svg"
            alt="logo"
          />
          <br />
          <b>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
        <div className="pro_col">
          <img
            style={{ height: "500px" }}
            src="./images/project44.svg"
            alt="logo"
          />
          <br />
          <b>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img
            className="vecRight"
            src="./images/vector_right.svg"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};
