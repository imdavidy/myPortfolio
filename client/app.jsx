import React from 'react';
import {render} from 'react-dom';
import Experience from './experience';
import Profile from './profile'

export default function content(props) {
  return (
    <div>
      <Profile names={{hi: "3", bye: "5"}}/>
      <div>
        <div className="">
          <h1 className="display-4 text-center">David Yoon</h1>
          <p className="h4 text-center">
            <em>I'm a creative JavaScript webdeveloper</em>
          </p>
          <div>
            <div className="text-center">
              <div className="img-thumbnail text-center" style={{maxWidth: "max-content", margin: "auto"}}>

                <img src="./img/myProfilePic.jpg" />
                <p>
                  <small>David's amazing, caught in the wild, profile picture*<br/>
                    <small>*Not scale to size. Maybe larger in real life</small>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <Experience />
          <div className="row justify-content-md-center">
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
            
            Email: <a  href="mailto:imdavidy@gmail.com">imdavidy@gmail.com</a><br />
          LinkedIn: <a  href="https://www.linkedin.com/in/david-yoon-4530538b/" target="_blank"> https://www.linkedin.com/in/david-yoon-4530538b/</a><br />
        GitHub: <a  href="https://github.com/imdavidy" target="_blank">https://github.com/imdavidy</a><br />
        Resume: <a  href="https://drive.google.com/file/d/16KhHcAm9jwme8l29989WsOdNckHhWjfT/view?usp=sharing" target="_blank">David_Yoon-Resume.pdf</a>
            </div>
          </div>
        </div>
          <h4 className="display-5 text-center">Projects</h4>
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
                    <a href="https://youtu.be/N0WqTclxkaE" target="_blank"><img className="card-img-top" alt="100%x280" style={{width: '216px', display: 'block'}} src="./img/fireBaseThumb.png" />
                    <div className="card-body" style={{padding: 8}}>
                      <h5 className="card-title">Intro to FireBase</h5>
                      <p className="card-text">Intodunction to FireBase</p>
                    </div></a>
                  </div>
                </div>
              
          </div>
          <hr/>
        </div>
      <footer className="text-center">Written and coded by David Yoon<br/><br/></footer>
    </div>
  )
}
