import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import jsIcon from "@iconify/icons-logos/javascript";
import jqueryIcon from "@iconify/icons-logos/jquery";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import sassIcon from "@iconify/icons-logos/sass";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import { AnimationOnScroll } from "react-animation-on-scroll";
import pythonIcon from '@iconify/icons-logos/python';
import mysqlIcon from '@iconify/icons-logos/mysql';
import dockerIcon from '@iconify/icons-bxl/docker';
import figmaIcon from '@iconify/icons-bxl/figma';
import reduxIcon from '@iconify/icons-bxl/redux';
import phpIcon from '@iconify/icons-bxl/php';
import javaIcon from '@iconify/icons-bxl/java';
class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span>{sectionName}</span>
            </h1>
            <div className="services">
              <div>
                <i className="fa fa-paint-brush w3-xxlarge w3-text-red"></i>
                <p>Graphic Design</p>
              </div>
              <div>
                <i className="fas fa-globe w3-xxlarge w3-text-blue"></i>
                <p>Web Design</p>
              </div>
              <div>
                <i className="fas fa-database w3-xxlarge w3-text-green"></i>
                <p>Software</p>
              </div>
              <div>
                <i className="fas fa-sitemap w3-xxlarge w3-text-orange"></i>
                <p>Architecture</p>
              </div>
            </div>
          </div>
          <fieldset>
            <legend>&nbsp;Proficiency&nbsp;&nbsp;&nbsp;</legend>
            <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              className="col-md-12 text-center"
            >
              {/* { <ul className="list-inline mx-auto skill-icon">{skills}</ul> } */}
              <div className="skill-icons">
                <Icon icon={jsIcon} style={{ fontSize: "400%" }} />
                <Icon icon={reactIcon} style={{ fontSize: "400%" }} />
                <Icon icon={vueIcon} style={{ fontSize: "400%" }} />
                <Icon icon={angularIcon} style={{ fontSize: "400%" }} />
                <Icon icon={bootstrapIcon} style={{ fontSize: "400%" }} />
                <Icon icon={typescriptIcon} style={{ fontSize: "400%" }} />
                <Icon icon={nodejsIcon} style={{ fontSize: "400%" }} />
                <Icon icon={sassIcon} style={{ fontSize: "400%" }} />
                <Icon icon={jqueryIcon} style={{ fontSize: "400%" }} />
                <Icon icon={reduxIcon} style={{ fontSize: "400%" }} />
              </div>
            </AnimationOnScroll>
          </fieldset>
          <fieldset>
            <legend>&nbsp;skillful&nbsp;&nbsp;&nbsp;</legend>
            <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              className="col-md-12 text-center"
            >
              {/* { <ul className="list-inline mx-auto skill-icon">{skills}</ul> } */}
              <div className="skill-icons">
                <Icon icon={pythonIcon} style={{ fontSize: "400%" }} />
                <Icon icon={mysqlIcon} style={{ fontSize: "400%" }} />
                <Icon icon={dockerIcon} style={{ fontSize: "400%" }} />
                <Icon icon={figmaIcon} style={{ fontSize: "400%" }} />
                <Icon icon={phpIcon} style={{ fontSize: "400%" }} />
                <Icon icon={javaIcon} style={{ fontSize: "400%" }} />
              </div>
            </AnimationOnScroll>
          </fieldset>
        </div>
      </section>
    );
  }
}

export default Skills;
