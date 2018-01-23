import React from 'react';
import {render} from 'react-dom';
import App from './app';

export default function content(props) {
  return (
    <div>
      <div>
          <div className="jumbotron">
            <h1 className="display-4 text-center">David Yoon</h1>
            <p className="h4 text-center">
              <em>I'm a creative JavaScript webdeveloper</em>
            </p>
            <div>
              <div className="text-center">
                <div className="img-thumbnail">

                  <img src="./img/myProfilePic.jpg" />
                  <p>
                    <small>David's amazing, caught in the wild, profile picture*<br/>
                      <small>*Not scale to size. Maybe larger in Real Life</small>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="h5 col text-center">Here's a timeline of David's Professional life:
              </p>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-7">
                <ul>
                  <li>
                    <strong>2017</strong>
                    - Graduated Fullstack Academy Immersive Program</li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <blockquote className="blockquote col-6">
                <p className="col mb-0">"So... how does it work?"</p>
                <footer className="blockquote-footer">David Yoon</footer>
              </blockquote>
              <p>
              Full stack software engineer with previous background 10+ years in graphic design. Having come from a creative background coupled with the analytical skills of a full stack developer, they form a synergy that is very rare and valuable. I believe it’s an indispensable and vital asset for any company or organization to be comprised of to grow. My full stack knowledge is comprised of JavaScript, Node.js, Express, React, Sequelize and PostgresSQL.
              
              Accomplished professional with multiple background demonstrating stellar adaptation and problem solving skills across multiple mediums.
              Has international work experience utilizing English and Korean bilingual ability in the workplace.
              
              Strives to introduce the most up to date technology into all projects for a most affective and efficient solution possible.
            </p>
            <br/>
            <div>
              <h5>Proficient in the following:</h5>
              <p>JavaScript, Node.js, Express, React/React-Redux, Redux, Sequelize, PostgreSQL, Socket.io, jQuery, Jasmine, Mocha/Chai, Git/GitHub, HTML/CSS, Adobe Photoshop, Adobe InDesign, Adobe Illustrator, Adobe PageMaker, Adobe Image Ready, Adobe Premiere, QuarkXpress, Fontographer, Flash, Director, Corel Draw, Microsoft Front Page, Microsoft Office</p>
              
              Email: imdavidy@gmail.com<br />
              LinkedIn: https://www.linkedin.com/in/david-yoon-4530538b/<br />
              GitHub: https://github.com/imdavidy<br />
              Resume: David_Yoon-Resume.pdf
            </div>
            <p className="h3">If you would like to send me a message, please feel free to <a  href="mailto:imdavidy@gmail.com">email</a>.
            </p>
            </div>
          </div>
          <h5 className="display-5 text-center">Projects</h5>
          <div className="jumbotron">
              
                <div className="row" style={{justifyContent: "center"}}>
                  <div className="card" style={{width: "216px", display: "block"}}>
                    <img className="card-img-top" alt="100%x280" style={{width: "216px", display: "block"}} src="./img/codeTapThumb.png" />
                    <div className="card-body" style={{padding: 8}}>
                      <h5 className="card-title">CodeTap</h5>
                      <p className="card-text">Mobile Coding App</p>
                    </div>
                  </div>
                  <div className="card" style={{width: "216px", display: "block"}}>
                    <img className="card-img-top" alt="100%x280" style={{width: "216px", display: "block"}} src="./img/powerMarketThumb.png" />
                    <div className="card-body" style={{padding: 8}}>
                      <h5 className="card-title">PowerMarket</h5>
                      <p className="card-text">E-commerse Website for superpowers</p>
                    </div>
                  </div>
                  <div className="card" style={{width: "216px", display: "block"}}>
                    <img className="card-img-top" alt="100%x280" style={{width: "216px", display: "block"}} src="./img/jayeonThumb.png" />
                    <div className="card-body" style={{padding: 8}}>
                      <h5 className="card-title">Porject: JaYeon</h5>
                      <p className="card-text">Data Visualization for weather information</p>
                    </div>
                  </div>
                  <div className="card" style={{width: "216px", display: "block"}}>
                    <img className="card-img-top" alt="100%x280" style={{width: "216px", display: "block"}} src="./img/fireBaseThumb.png" />
                    <div className="card-body" style={{padding: 8}}>
                      <h5 className="card-title">Intro to FireBase</h5>
                      <p className="card-text">Intodunction to FireBase</p>
                    </div>
                  </div>
                </div>
              
          </div>
          <hr/>
        </div>
      <footer className="text-center">Written and coded by David Yoon</footer>
    </div>
  )
}
