import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="parent">
          <img src="./images/Photo.svg" className="center" alt="Search" />
          <h2 className="bottom-left">
            Let Your Home <br /> Be Unique
          </h2>
          <p className="bot-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum
            <br />
            dolor sit amet, consectetur adipisicing elit
          </p>
          <button className="btn1" onClick={() => navigate("/Error404")}>
            Get Started <img src="./images/right.svg" alt="logo" />
          </button>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="column">
            <h2>Project Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
              ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit
              Lorem ipsum.
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
            <h2>Realizations</h2>
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

        <div className="Container2">
          <img
            className="img_deg"
            style={{ width: "40%" }}
            src="./images/Photo1.svg"
            alt="logo"
          />
          <h2>
            We Create The Art <br /> Of Styling Living <br /> Stylishly
          </h2>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum.Lorem ipsum dolor sit amet, consectetur adipisicing elit
            Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit Lorem ipsum.
          </p>
          <br />
          <br />
          <img src="./images/call.svg" alt="logo" />
          <span>
            <b>012345678</b>
            <br />
            Call Us Anytime
          </span>
          <br />
          <br />
          <button className="btn2" onClick={() => navigate("/Error404")}>
            Get Free Estimated <img src="./images/right.svg" alt="logo" />
          </button>
          <br />
        </div>

        <div className="container3">
          <h2>
            <u>What The People Think ABout Us</u>
          </h2>
          <br />
          <div className="column">
            <img className="img_rad" src="./images/pic1.svg" alt="logo" />
            <h5>Nattasha Mith</h5>
            <i>Sydney, USA</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
              ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit
              Lorem ipsum.
            </p>
            <br />
          </div>

          <div className="column">
            <img className="img_rad" src="./images/pic2.svg" alt="logo" />
            <h5>Raymond Galario</h5>
            <i>Sydney, Australia</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
              ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit
              Lorem ipsum.
            </p>
            <br />
          </div>

          <div className="column">
            <img className="img_rad" src="./images/pic3.svg" alt="logo" />
            <h5>Benny Roll</h5>
            <i>Sydney, New York</i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
              ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit
              Lorem ipsum.
            </p>
            <br />
          </div>
        </div>

        <div className="Container3">
          <img className="Client" src="./images/Client Logo.svg" alt="logo" />
        </div>

        <div className="container4">
          <h1>Follow Our Projects</h1>
          <br />
          <p>
            Its is a Long established fact that a reader will be distracted by
            the of readable <br />
            content of page looking at its layouts points.
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col">
              <img className="col1" src="./images/propic1.svg" alt="logo" />
              <br />
              <b>Modern kitchen</b>
              <br />
              <p>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
            <div className="col">
              <img className="col2" src="./images/propic2.svg" alt="logo" />
              <br />
              <b>Modern kitchen</b>
              <br />
              <p>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
            <h1></h1>
            <div className="col">
              <img className="col3" src="./images/propic3.svg" alt="logo" />
              <br />
              <b>Modern kitchen</b>
              <br />
              <p>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
            <div className="col">
              <img className="col4" src="./images/propic4.svg" alt="logo" />
              <br />
              <b>Modern kitchen</b>
              <br />
              <p>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="container5">
          <div className="padd">
            <h2 className="colour">12</h2>
            <p>Year of Experince</p>
          </div>
          <div class="vl"></div>
          <div className="padd">
            <h2 className="colour">85</h2>
            <p>Success Project</p>
          </div>
          <div class="vl"></div>
          <div className="padd">
            <h2 className="colour">15</h2>
            <p>Active Project</p>
          </div>
          <div class="vl"></div>
          <div className="padd">
            <h2 className="colour">95</h2>
            <p>Happy Coustomer</p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="container6">
          <h1>Articles & News</h1>
          <p>
            {" "}
            Its is a Long established fact that a reader will be distracted by
            the of readable, Its is a Long established fact that a reader will
            be distracted by the of readable
            <br /> Its is a Long established fact that a reader will be
            distracted by the of readable.
          </p>
          <br />
          <div className="row">
            <div className="column">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/art_pic1.svg"
                />
                <div className="main2">
                  <span>Kitchen Design</span>
                </div>
              </div>
              <h4>Let's Get Solution For Building Construction Work</h4>
              <p>
                26 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="column">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/art_pic2.svg"
                />
                <div className="main2">
                  <span>Living Design</span>
                </div>
              </div>
              <h4>Low Cost Latest Invented Interior Designing Ideas.</h4>
              <p>
                22 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="column">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/art_pic3.svg"
                />
                <div className="main2">
                  <span>Interior Design</span>
                </div>
              </div>
              <h4>Best For Any Offices & Bunisses Interior Solution</h4>
              <p>
                25 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
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
      </div>
    </>
  );
}
