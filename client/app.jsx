import React from 'react';
import {render} from 'react-dom';
import Experience from './components/experience';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects'

export default function content(props) {
  return (
    <div>
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <hr />
      <footer className="text-center">Written and coded by David Yoon<br/><br/></footer>
    </div>
  )
}
