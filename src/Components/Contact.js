import React from "react";
import "../App.css";

export default function Contact() {
  const center = {
    textAlign: "center",
  };

  const posit = {
    width: "100%",
  };
  const padd = {
    padding: "20px",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/Contact_pic.svg" alt="Search" />
        <div className="main_in">
          <h1>Contact Us</h1>
          <p>Home/Service</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div style={center}>
          <h2>
            We Loving meeting new People
            <br />
            and Helping Them.
          </h2>
        </div>
        <br />
        <br />
        {/* nedsjdjj */}
        <div class="clearfix">
          <div class="box1">
            <img src="./images/call.svg" alt="Search" />
            <span> +1 (378) 400-1234</span>
            <br />
            <br />
            <img src="./images/email.svg" alt="Search" />
            <span> info@yourdomain.com</span>
            <br />
            <br />
            <img src="./images/browser.svg" alt="Search" />
            <span> www.yourdomain.com</span>
            <br />
            <br />
            <img style={padd} src="./images/facebook.svg" alt="logo" />
            <img style={padd} src="./images/instagram.svg" alt="logo" />
            <img style={padd} src="./images/linkdln.svg" alt="logo" />
            <img style={padd} src="./images/twitter.svg" alt="logo" />
          </div>
          <div class="box2">
            <div className="contactForm">
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
                <input
                  type="number"
                  name="phone"
                  class="formStyle"
                  placeholder="Phone No (required)"
                  required
                />
                <br />
                <textarea
                  type="text"
                  name="name"
                  class="formStyle"
                  placeholder="Hello Iam intrested in... (required)"
                  required
                />
                <br />
                <div className="inputbox">
                  <button className="inputbox">
                    Send Now <img src="./images/right.svg" alt="Search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <img src="./images/map.svg" alt="Search" className="map" />
        </div>
      </div>
    </>
  );
}
