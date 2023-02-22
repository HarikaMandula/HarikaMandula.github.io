import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import CountUp, { useCountUp } from 'react-countup';
//import womanTechnologistMediumSkinTone from "@iconify/icons-openmoji/woman-technologist-medium-skin-tone";

const Education = () => {
  return (
    <section id="education">
      <h1 className="section-title">
        <span className="text-black" style={{ textAlign: "center" }}>
          {'My Education'}
        </span>
      </h1>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i className="fas fa-user-graduate w3-xlarge w3-text-white"></i>}
        >
          <div>

            <h3 className="vertical-timeline-element-title">
              Bachelor in Computers
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Swami Ramananda Thirtha Institute of Science and Technology, Nalgonda
            </h4>
            <span class="vertical-timeline-element-date">2012 - 2015</span>
          </div>
          <div id='badge-ribbon'><CountUp end={76.05} enableScrollSpy delay={5} suffix={'%'} /></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ color: "#fff" }}
          icon={<i className="fa fa-skiing-nordic w3-xlarge w3-text-white"></i>}
        ><div>

            <h3 className="vertical-timeline-element-title">Intermediate Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gouthami Junior College, Miryalaguda
            </h4>
            <span class="vertical-timeline-element-date">2010 - 2012</span>
          </div>
          <div id='badge-ribbon'><CountUp end={97} enableScrollSpy delay={2} suffix={'%'} /></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i className="fa fa-baby w3-xlarge w3-text-white"></i>}
        ><div>
            <h3 className="vertical-timeline-element-title">Secondary School Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mount Carmel High School, Miryalaguda
            </h4>
            <span class="vertical-timeline-element-date">2009 - 2010</span>
          </div>
          <div id='badge-ribbon'><CountUp end={90} enableScrollSpy delay={2} suffix={'%'} /></div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
export default Education;
