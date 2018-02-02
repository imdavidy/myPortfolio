import React from 'react';
import {render} from 'react-dom';

export default function content(props) {
  return (
    <div className="container text-center">
      <h2>Experiences</h2>
      <q>The first step is half the journey.</q>
      <hr />
      <h3>Career</h3>
      <div className="experiences">
        <div className="experience row">
          <div>
            <h4>Fullstack Academy of Code</h4>
            <p className="dates">September 2017</p>
          </div>
          <div>
            <p>
              <strong>Immersive Full stack software development program</strong>
            </p>
          </div>
        </div>
        <div className="experience row">
          <div>
            <h4>Art Institute of Atlanta</h4>
            <p className="dates">September 2005</p>
          </div>
          <div>
            <p>
              <strong>Bachelor of Fine Art, Graphic Design</strong>
            </p>
          </div>
        </div>
        <div className="experience row">
          <div>
            <h4>University of Georgia</h4>
            <p className="dates">2003</p>
          </div>
          <div>
            <p>
              <strong>Course work in General Education</strong>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h3>Education</h3>
      <div>
      
      </div>
      {// <div className="row justify-content-md-center">
      //   <div className="col-7">
      //     <ul>
      //       <li>
      //         <strong>2017</strong>
      //         - Graduated Fullstack Academy Immersive Program</li>
      //     </ul>
      //   </div>
      // </div>
    }
    </div>
  )
}
