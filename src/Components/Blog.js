import React from "react";
import "../App.css";

export default function Blog() {
  const posit = {
    width: "100%",
  };

  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/blog1.svg" alt="Search" />
        <div className="main_in">
          <h1>Articles & News</h1>
          <p>Home/Blog</p>
        </div>
      </div>
      <div className="blog_container">
        <h2>Latest Post</h2>
        <br />
        <br />
        <img
          style={{ height: "300px", float: "left", borderRadius: "30px" }}
          src="./images/blog2.svg"
          alt="Search"
        />
        <div style={{ marginLeft: "500px" }}>
          <b>
            Low Cost Latest Invented Interior <br /> Designing Ideas
          </b>
          <br />
          <br />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem,
            consectetur adipisicing elit Lorem ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
            ipsumLorem ipsum dolor sit amet
          </p>
          <p>
            26 December,2022{" "}
            <img className="vecRight" src="./images/vector_right.svg" />
          </p>
        </div>
        <br />
        <br />
        <div>
          <h2>Articles & News</h2>
          <br />
          <br />
          <div className="row">
            <div className="blogcol">
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
            <div className="blogcol">
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
            <div className="blogcol">
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
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/blog5.svg"
                />
                <div className="main2">
                  <span>Kitchen Design</span>
                </div>
              </div>
              <h4>Best For Any Offices & Bunisses Interior Solution</h4>
              <p>
                25 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/blog6.svg"
                />
                <div className="main2">
                  <span>Living Design</span>
                </div>
              </div>
              <h4>Best For Any Offices & Bunisses Interior Solution</h4>
              <p>
                25 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/blog7.svg"
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
      </div>
    </>
  );
}
