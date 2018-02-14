import React from 'react';
import {render} from 'react-dom';

export default function projects(props) {
  return (
    <div className="background-white">
      <div className="container" id="projects">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <a href="https://www.youtube.com/watch?v=mVvqV6G-RRY" target="_blank">
            <img className="card-img-top" src="./img/codeTapThumb.png" />
            <div className="card-body">
              <h5 className="card-title">CodeTap</h5>
              <p className="card-text">Mobile Coding App
              <br />
              A mobile application that allows you to practice coding problems On or Offline with a custom keyboard to be able to code quickly.
              </p>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Webpack</li>
                <li>React/Redux</li>
                <li>React Native</li>
                <li>Native Base</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <a href="http://power-market.herokuapp.com/" target="_blank">
            <img className="card-img-top" src="./img/powerMarketThumb.png" />
            <div className="card-body">
              <h5 className="card-title">PowerMarket</h5>
              <p className="card-text">E-commerse Website for buying and selling superpowers</p>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Passport</li>
                <li>OAuth</li>
                <li>Webpack</li>
                <li>React/Redux</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Mocha/Chai</li>
                <li>waffle.io</li>
              </ul>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <a href="https://www.youtube.com/watch?v=Wy-KWzXf120" target="_blank">
            <img className="card-img-top" src="./img/jayeonThumb.png" />
            <div className="card-body">
              <h5 className="card-title">Porject: JaYeon</h5>
              <p className="card-text">Data Visualization for weather data using data from external API
              </p>
              
              
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Webpack</li>
                <li>React/Redux</li>
              </ul>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <a href="https://youtu.be/N0WqTclxkaE" target="_blank">
            <img className="card-img-top" src="./img/fireBaseThumb.png" />
            <div className="card-body">
              <h5 className="card-title">Intro to FireBase</h5>
              <p className="card-text">Intodunction to FireBase to cover what Firebase is, how it works, the advantages of Firebase and what features are available</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}