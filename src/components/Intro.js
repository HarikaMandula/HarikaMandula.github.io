import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import logo from "../assets/images/Me/bg2.jpg";
import "../scss/intro.scss";
import Button from "react-bootstrap/Button";
import { ReactComponent as portfolioSvg } from "../assets/images/Me/fd.svg";
import portfolioSvg1 from "../assets/images/Me/fd.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
class Intro extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <div id="intro">
        {/* <div id="stars"></div>
        <div className="clouds">
          <div class="x2">
            <div class="cloud"></div>
          </div>

          <div class="x3">
            <div class="cloud"></div>
          </div>

          <div class="x4">
            <div class="cloud"></div>
          </div>

          <div class="x5">
            <div class="cloud"></div>
          </div>
        </div>
       <div class="boxes">
            <ul class="single-box">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>  */}
        <div className="intro-container">
          {/* <div class="sun" /> */}
          <br />
          <div className="intro_text">
            <AnimationOnScroll
              animateIn="animate__lightSpeedInLeft"
              className="hello"
            >
              👋 Hey Amigos, I'm
            </AnimationOnScroll>
            <div className="left">
            <h1 className="mb-0">
            Harika 
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={this.state.checked}
              onChange={this.onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
            <br />
            <Button variant="warning" size="lg">
              Show More
            </Button>{" "}
          </div></div>
        </div>
      </div>
    );
  }
}

export default Intro;
