import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();

  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/servicepic1.svg" alt="Search" />
        <div className="main_in">
          <h1>Services</h1>
          <p>Home/Service</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="column">
          <h2>Project Plan</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2>Interior Work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2>Retail Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />
          </span>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="column">
          <h2>2nd/3rd Art Work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2>Interior Work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2>Decoration Work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />
          </span>
        </div>
      </div>

      <div className="ser_container">
        <h1>How We Work</h1>
        <p>
          it is a long established fact will be distracted. Lorem lpsum is
          simply dummy text of <br />
          the Printing and type setting industry.
        </p>
        <br />
        <br />
        <br />
        <div>
          <img
            src="./images/servicepic2.svg"
            style={{
              float: "left",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/icon1.svg" />
          <br />
          <br />
          <br />
          <h4>
            <b>Concept & Details</b>
          </h4>
          <p>
            it is a long established fact will be distracted.
            <br /> Lorem lpsum is simply dummy text of the <br />
            andtypesetting industry.
          </p>
        </div>
        <br />
        <br />
        <div style={{ marginTop: "100px" }}>
          <img
            src="./images/servicepic3.svg"
            style={{
              float: "right",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/icon2.svg" />
          <br />
          <br />
          <br />
          <h4>
            <b>Concept & Details</b>
          </h4>
          <p>
            it is a long established fact will be distracted.
            <br /> Lorem lpsum is simply dummy text of the <br />
            andtypesetting industry.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ marginTop: "100px" }}>
          <img
            src="./images/servicepic4.svg"
            style={{
              float: "left",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/icon3.svg" />
          <br />
          <br />
          <br />
          <h4>
            <b>Concept & Details</b>
          </h4>
          <p>
            it is a long established fact will be distracted.
            <br /> Lorem lpsum is simply dummy text of the <br />
            andtypesetting industry.
          </p>
        </div>
        <br />
        <br />
        <div style={{ marginTop: "100px" }}>
          <img
            src="./images/servicepic5.svg"
            style={{
              float: "right",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/icon2.svg" />
          <br />
          <br />
          <br />
          <h4>
            <b>Concept & Details</b>
          </h4>
          <p>
            it is a long established fact will be distracted.
            <br /> Lorem lpsum is simply dummy text of the <br />
            andtypesetting industry.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="conatiner7">
        <h1>Wanna Join The Interno ?</h1>
        <p>It is a long established fact will be distracted</p>
        <button className="butt" onClick={() => navigate("/Contact")}>
          Contact With US <img src="./images/last_right.svg" alt="logo" />
        </button>
      </div>
    </>
  );
};
