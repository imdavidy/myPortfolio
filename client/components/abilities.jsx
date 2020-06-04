import React from 'react';
import {render} from 'react-dom';

export default function abilities(props) {
  return (
    <div className="container" id="abilities">
      <h2>Abilities</h2>
      <hr />
      <h3>Skills</h3>
      <div className="row">
        <div className="col-md-8">
          <h5>Proficient in the following:</h5>
          <p>
            JavaScript, Node.js, Express, React/React-Redux, Redux, AngularJS, MySql, MongoDB, Redis, Sequelize, PostgreSQL, Socket.io, jQuery, Jasmine, Mocha/Chai, Git/GitHub, HTML/CSS, Adobe Photoshop, Adobe InDesign, Adobe Illustrator, Adobe PageMaker, Adobe Image Ready, Adobe Premiere, QuarkXpress, Fontographer, Flash, Director, Corel Draw, Microsoft Front Page, Microsoft Office
          </p>
        </div>
      </div>
      <hr />
      <h3>Languages</h3>
      <div className="row">
        <div className="col-md-8">
          <p>
            English (Fluent written and spoken),
            <br />
            Korean (Intermediate conversational)
          </p>
        </div>
      </div>
    </div>
  )
}