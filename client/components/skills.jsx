import React from 'react';
import {render} from 'react-dom';

export default function skills(props) {
  return (
    <div className="container" id="skills">
      <h2>Skills</h2>
      <h5>Proficient in the following:</h5>
      <p>
        JavaScript, Node.js, Express, React/React-Redux, Redux, Sequelize, PostgreSQL, Socket.io, jQuery, Jasmine, Mocha/Chai, Git/GitHub, HTML/CSS, Adobe Photoshop, Adobe InDesign, Adobe Illustrator, Adobe PageMaker, Adobe Image Ready, Adobe Premiere, QuarkXpress, Fontographer, Flash, Director, Corel Draw, Microsoft Front Page, Microsoft Office
      </p>
      <p>
        <a  href="mailto:imdavidy@gmail.com">
          <i className="fas fa-envelope fa-lg"></i> imdavidy@gmail.com</a>
        <br />
        <a  href="https://www.linkedin.com/in/david-yoon-4530538b/" target="_blank">
          <i className="fab fa-linkedin fa-lg"></i> https://www.linkedin.com/in/david-yoon-4530538b/</a>
        <br />
        <a  href="https://github.com/imdavidy" target="_blank">
          <i className="fab fa-github fa-lg"></i> https://github.com/imdavidy</a>
        <br />
        <a  href="https://drive.google.com/file/d/16KhHcAm9jwme8l29989WsOdNckHhWjfT/view?usp=sharing" target="_blank">
          <i className="far fa-file-pdf fa-lg" /> David_Yoon-Resume.pdf</a>
      </p>  
    </div>
  )
}