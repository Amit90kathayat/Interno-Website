import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function About() {
  const navigate = useNavigate();
  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/about1.svg" alt="Search" />
        <div className="main_in">
          <h1>About US</h1>
          <p>Home/About</p>
        </div>
      </div>
      <div className="about_Container">
        <span style={{ fontSize: "150px" }}>&#8220;</span>
        <h5>
          <i>
            I Like an interior that defines labeling. i don't <br />
            really Want someone to walk into a room and
            <br />
            know that i did it
          </i>
        </h5>
        <p>-BUNNY WILLIAMS </p>
        <br />
        <br />
        <br />
        <div>
          <img
            style={{ height: "250px", float: "right", borderRadius: "30px" }}
            src="./images/about2.svg"
            alt="Search"
          />
          <h3>
            <b>What We Do </b>
          </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem,
            consectetur adipisicing elit Lorem ipsum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit Lorem, consectetur adipisicing
            elit Lorem ipsum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit Lorem, consectetur adipisicing elit Lorem ipsum.
          </p>
          <button
            style={{
              padding: "7px",
              borderRadius: "10px",
              backgroundColor: "#292F36",
              color: "white",
            }}
            onClick={() => navigate("/Error404")}
          >
            Our Concpet <img src="./images/right.svg" alt="logo" />
          </button>
        </div>
        <div style={{ padding: "100px" }}>
          <img
            style={{ height: "250px", float: "left", borderRadius: "30px" }}
            src="./images/about3.svg"
            alt="Search"
          />
          <h3>
            <b>The End Result </b>
          </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem,
            consectetur adipisicing elit Lorem ipsum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit Lorem, consectetur adipisicing
            elit Lorem ipsum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit Lorem, consectetur adipisicing elit Lorem ipsum.
          </p>
          <button
            style={{
              padding: "7px",
              borderRadius: "10px",
              backgroundColor: "#292F36",
              color: "white",
            }}
            onClick={() => navigate("/Error404")}
          >
            Our PortFolio <img src="./images/right.svg" alt="logo" />
          </button>
        </div>
      </div>
      <div className="about_container2">
        <h2>What The People Thing About Us</h2>
        <div>
          <img
            style={{ borderRadius: "20px", padding: "10px" }}
            src="./images/about4.svg"
            alt="Search"
          />
          <img
            style={{ borderRadius: "20px", padding: "10px" }}
            src="./images/about5.svg"
            alt="Search"
          />
          <img
            style={{ borderRadius: "20px", padding: "10px" }}
            src="./images/about7.svg"
            alt="Search"
          />
        </div>
      </div>
      <div className="about_container3">
        <h2>
          Creative Projects? Let's have <br />a productive talk .
        </h2>
        <form>
          <input
            type="text"
            name="name"
            class="formStyle"
            placeholder="Name (required)"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            class="formStyle"
            placeholder="Email (required)"
            required
          />
          <br />
          <textarea
            type="text"
            name="email"
            class="formStyle"
            placeholder="Hello Iam Intrested In (required)"
            required
          />
          <br />
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#292F36",
              color: "white",
            }}
            onClick={() => navigate("/Error404")}
          >
            Send Now <img src="./images/right.svg" alt="logo" />
          </button>
        </form>
      </div>
    </>
  );
}
