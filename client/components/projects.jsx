import React from 'react';
import {render} from 'react-dom';

export default function projects(props) {
  return (
    <div className="container" id="projects">
      <h2>Projects</h2>
      <div className="row">
        <div className="card">
          <a href="https://www.youtube.com/watch?v=mVvqV6G-RRY" target="_blank">
            <img className="card-img-top" src="./img/codeTapThumb.png" />
            <div className="card-body">
              <h5 className="card-title">CodeTap</h5>
              <p className="card-text">Mobile Coding App</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="http://power-market.herokuapp.com/" target="_blank">
            <img className="card-img-top" src="./img/powerMarketThumb.png" />
            <div className="card-body">
              <h5 className="card-title">PowerMarket</h5>
              <p className="card-text">E-commerse Website for superpowers</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://www.youtube.com/watch?v=Wy-KWzXf120" target="_blank">
            <img className="card-img-top" src="./img/jayeonThumb.png" />
            <div className="card-body">
              <h5 className="card-title">Porject: JaYeon</h5>
              <p className="card-text">Data Visualization for weather information</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://youtu.be/N0WqTclxkaE" target="_blank">
            <img className="card-img-top" src="./img/fireBaseThumb.png" />
            <div className="card-body">
              <h5 className="card-title">Intro to FireBase</h5>
              <p className="card-text">Intodunction to FireBase</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}