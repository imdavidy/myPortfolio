import React from 'react';
import {render} from 'react-dom';
import Experience from './components/experience';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact'

export default function content(props) {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1>David Yoon</h1>
          <p>Creative Fullstack Developer</p>
        </div>
        <div className="overlay" />
      </div>
      <nav className="side-nav">
        <ul>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
