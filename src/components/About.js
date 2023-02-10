import React, { Component } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from "../assets/images/Me/s3.jpg";
import '../scss/about.scss';
import portfolioSvg1 from "../assets/images/Me/fd.svg";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="abt-container">
              <div className="polaroid">
                <AnimationOnScroll animateIn="animate__slideInLeft animate__fadeIn" style={{ cursor: "auto" }}>
                  <img
                    src={logo}
                    alt="Avatar placeholder"
                  />
                </AnimationOnScroll>
              </div>

            <AnimationOnScroll animateIn="animate__slideInRight animate__fadeIn" className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body text-justify ml-3 mr-3"
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br /><br />
                    <ul>
                      <li>
                        8+ years experienced Front End Developer with hands-on
                        experience in identifying web-based user interactions
                        along with designing & implementing highly-responsive
                        user interface components by deploying React concepts.
                      </li>
                      <li>
                        Proficient in translating designs & wireframes into
                        high-quality code, and writing application interface
                        code via Javascript and ReactJS workflows.{" "}
                      </li>
                      <li>
                        Adept at monitoring & maintaining frontend performance
                        and troubleshooting & debugging the same to bolster
                        overall performance
                      </li>
                    </ul>
                  </div>
            </AnimationOnScroll>
        </div>
      </section>
    );
  }
}

export default About;
