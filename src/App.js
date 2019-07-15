import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Counts } from './components/Counts';
import { Footer } from './components/Footer';

class App extends React.Component {
  static defaultProps = {
    experience: [
      {"position": "JUNIOR PROJECT MANAGER", "company": "DESIGN STUDIO", dates: "MARCH 2015 - PRESENT", description: "Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.", responsibilities: ["Duis non volutpat arcu, eu mollis tellus.", "Quis consequat nulla effi citur at.", "Sed finibus aliquam neque sit."]},
      {"position": "WEB MASTER/WEB DEVELOPER", "company": "DESIGN & WEB STUDIO", dates: "APRIL 2014 - FEBRUARY 2015", description: "Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.", responsibilities: ["Duis non volutpat arcu, eu mollis tellus.", "Quis consequat nulla effi citur at.", "Sed finibus aliquam neque sit."]}
    ],
    education: [
      {"degree": "MASTER DEGREE IN SCIENCE", "college": "UCLA - SCIENCE AND ENGINEERING", "date": "GRADUATED IN MAY 2010(2 YEARS)", "description" :"Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales."},
      {"degree": "COURSE ON COMPUTER SCIENCE", "college": "NEW YORK PUBLIC UNIVERSITY", "date": "GRADUATED IN MAY 2009(6 MONTHS)", "description" :"Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales."},
      {"degree": "GRADUATED VALEDICTERIAN", "college": "PUBLIC COLLEGE", "date": "GRADUATED IN MAY 2008(4 YEARS)", "description" :"Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales."}
    ],
    counters: [
      {"duration": "400", "count": "3", "description": "Coder Degrees"},
      {"duration": "1400", "count": "25", "description": "Languages & Frameworks"},
      {"duration": "700", "count": "311", "description": "Satisfied Clients"},
      {"duration": "2000", "count": "732", "description": "Finished Projects"}
    ],
    skills: [
      {"title": "HTML5 & CSS3", "percent": ".97"},
      {"title": "WEB DESIGN", "percent": ".78"},
      {"title": "SWIFT", "percent": ".67"},
      {"title": "PHP", "percent": ".97"}
    ]
  }

  render() {
    const { experience, education, counters, skills } = this.props;
    return (
      <div>
        <Header />
        <Intro />
        <Portfolio />
        <About skills={ skills } />
        <Experience jobs={ experience } />
        <Education degrees={ education } />
        <Counts counters={ counters } />
        <Footer />
      </div>
    )
  }
}

Experience.propTypes = {
  jobs: PropTypes.array
}

Education.propTypes = {
  degrees: PropTypes.array
}

Counts.propTypes = {
  counters: PropTypes.array
}

About.propTypes = {
  skills: PropTypes.array
}

export default App;
