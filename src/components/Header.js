import React from "react";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import "./Header.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import esign from "../assets/images/Me/signature.png";
import { ReactComponent as portfolioSvg } from "../assets/images/me.svg";
import Intro from "./Intro";
import "../scss/intro.scss";

const Header = (props) => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <>
      <div className="header">
        <img src={esign} alt="esign" />
        <Navbar className="navigation">
          <Nav.Link href="#section0">Home</Nav.Link>
          <Nav.Link href="#section1">About</Nav.Link>
          <Nav.Link href="#section2">Projects</Nav.Link>
          <Nav.Link href="#section3">Skills</Nav.Link>
          <Nav.Link href="#section4">Experience</Nav.Link>
        </Navbar>
      </div>
      <div ref={scrollRef} className="portfolio-body">
        <div id="section0" className="App-section w3-animate-fading">
          {/* <ul class="single-box">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
          <Intro sharedData={props.data.sharedData.basic_info} />
        </div>
        <div id="section1" className="App-section w3-animate-fading">
          <About
            resumeBasicInfo={props.data.resumeData.basic_info}
            sharedBasicInfo={props.data.sharedData.basic_info}
          />
        </div>
        <div id="section3" className="App-section">
          <Skills
            sharedSkills={props.data.sharedData.skills}
            resumeBasicInfo={props.data.resumeData.basic_info}
          />
        </div>
        <div id="section4" className="App-section">
          <Experience
            resumeExperience={props.data.resumeData.experience}
            resumeBasicInfo={props.data.resumeData.basic_info}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
