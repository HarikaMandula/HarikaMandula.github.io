import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
//import womanTechnologistMediumSkinTone from "@iconify/icons-openmoji/woman-technologist-medium-skin-tone";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';

const Experience = () => {
  return (
    <section id="experience">
      <h1 className='section-title'>
      <span className="text-black" style={{ textAlign: "center" }}>
        {'My Experience'}
      </span></h1>
    <StyledEngineProvider>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Senior Software Engineer</Typography>
          <Typography>2020 - Present</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h4 className="vertical-timeline-element-subtitle">
            Kroll (Formerly Duff and Phelps), Hyderabad
          </h4>
          <ul>
            <li>
              {" "}
              Working for in home applications, Pearl, Client Portal and Reghub
            </li>{" "}
            <li>
              {" "}
              UI Components Designing & Application Interface Coding Code
              Debugging & Front-end Architecture
            </li>{" "}
            <li> Performance Optimization & Features Development</li>{" "}
            <li>
              {" "}
              Working with agile team to migrate legacy company website to
              ReactJS
            </li>{" "}
            <li>
              {" "}
              Translated design team's UX wireframes and mock-ups into
              responsive, interactive features, using ReactJS
            </li>{" "}
            <li>
              {" "}
              Working with agile team to migrate legacy company website to
              ReactJS
            </li>{" "}
            <li>
              {" "}
              Created HTML email templates that improved email CTR rates by ~25%
            </li>{" "}
            <li>
              {" "}
              Designed and developed GUI for applications and modules, using
              JavaScript
            </li>{" "}
            <li>
              {" "}
              Completely migrated UI authentication to Auth0 from Microsoft B2C.
              Taken care of the modules, login, logout, edit user and token
              refresh etc
            </li>{" "}
            <li>
              {" "}
              Co-ordinating with junior dev team, assigning tasks and helping
              them to resolve issues
            </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Senior Software Developer</Typography>
          <Typography>2019 - 2020</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h4 className="vertical-timeline-element-subtitle">
            Future Focus Infotech, Hyderabad
          </h4>
          <ul>
            <li>Worked for Online banking page of BOA (Bank of America)</li>{" "}
            <li>
              Worked on different features like customer rewards, military
              benefits and short sale
            </li>{" "}
            <li>
              Worked on technologies, Sparta – a customized framework, ReactJS
              and VueJS
            </li>{" "}
            <li>
              Revamped UI and app interface for customer-facing e-commerce site
              with 200,000+ unique visitors per month
            </li>{" "}
            <li>
              Designed and developed front-end for 20+ websites, using jQuery,
              AJAX, RequireJS, and Handlebars.js
            </li>{" "}
            <li>
              Automated image optimization, using Grunt and minified JS and CSS,
              which reduced page load times by up to 30%
            </li>{" "}
            <li>
              Making service calls, retrieving the data from the app side, data
              filter etc.
            </li>{" "}
            <li>Other tools used postman and nextgen</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Associate Manager</Typography>
          <Typography>2019 - 2018</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h4 className="vertical-timeline-element-subtitle">
            Jegan Research Associates (JRA), Hyderabad
          </h4>
          <ul>
            <li>
              Designing online market research surveys using HTML, CSS and
              JavaScript
            </li>{" "}
            <li>
              Communicating with US clients, fielding partners during project
              cycle, deploying surveys in US market
            </li>{" "}
            <li>Programming fielding progress using PHP and MySQL</li>{" "}
            <li>Internal testing of surveys for textual and logical case</li>{" "}
            <li>Preparing data using SPSS tool, sharing for analysis</li>{" "}
            <li>
              Independent project execution with below level programmer analysts
            </li>{" "}
            <li>
              Leading Development teams and sprouting them for independent
              project execution
            </li>{" "}
            <li>
              Oversaw training and onboarding process for all newly hired
              employees within dev team.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Senior Programmer Analyst</Typography>
          <Typography>2016 - 2017</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h4 className="vertical-timeline-element-subtitle">
            Jegan Research Associates (JRA), Hyderabad
          </h4>
          <ul>
            <li>
              Designing online market research surveys using HTML, CSS and
              JavaScript
            </li>{" "}
            <li>
              Communicating with US clients, fielding partners during project
              cycle, deploying surveys in US market
            </li>{" "}
            <li>Programming fielding progress using PHP and MySQL</li>{" "}
            <li>Internal testing of surveys for textual and logical case</li>{" "}
            <li>Preparing data using SPSS tool, sharing for analysis</li>{" "}
            <li>
              Independent project execution with below level programmer analysts
            </li>{" "}
            <li>
              Leading Development teams and sprouting them for independent
              project execution
            </li>{" "}
            <li>
              Oversaw training and onboarding process for all newly hired
              employees within dev team.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Trainee, Programmer Analyst</Typography>
          <Typography>2015 - 2016</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h4 className="vertical-timeline-element-subtitle">
            Jegan Research Associates (JRA), Hyderabad
          </h4>
          <ul>
            <li>
              Designing online market research surveys using HTML, CSS and
              JavaScript
            </li>{" "}
            <li>
              Communicating with US clients, fielding partners during project
              cycle, deploying surveys in US market
            </li>{" "}
            <li>Programming fielding progress using PHP and MySQL</li>{" "}
            <li>Internal testing of surveys for textual and logical case</li>{" "}
            <li>Preparing data using SPSS tool, sharing for analysis</li>{" "}
            <li>
              Independent project execution with below level programmer analysts
            </li>{" "}
            <li>
              Leading Development teams and sprouting them for independent
              project execution
            </li>{" "}
            <li>
              Oversaw training and onboarding process for all newly hired
              employees within dev team.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </StyledEngineProvider>
    </section>
  );
};
export default Experience;
