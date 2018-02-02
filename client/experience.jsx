import React from 'react';
import {render} from 'react-dom';

export default function content(props) {
  return (
    <div className="container">
      <h2>Experiences</h2>
      <q>
        The first step is half the journey.
      </q>
      <br />
      <p>- <i>someone (if no one, then me.)</i></p>
      <hr />
      <h3>Career</h3>
      <div className="experiences">
        <div className="experience row">
          <div className="col-md-4">
            <h4>Freelance Graphic Designer</h4>
            <p className="dates">Feb. 2013 - Apr. 2017</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Graphic Designer | Consultant</strong>
              <br />
              <span className="experience-description">
                {/*
                  Consulted clients with various branding goals and visual representations
                */}
              </span>
              <br />
              <span className="experience-details">
                <span className="location">Columbus, GA</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Pagoda Jr.<small>(ByeongJeom Campus)</small></h4>
            <p className="dates">Sep. 2010 - Nov. 2012</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>English Instructor</strong>
              <br />
              <span className="experience-description">
                {/*
                */}
              </span>
              <br />
              <span className="experience-details">
                <span className="location">HwaSeong, South Korea</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Jungchul Jr.<small>(ByeongJeom Campus)</small></h4>
            <p className="dates">May 2008 - Aug. 2010</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>English Instructor</strong>
              <br />
              <span className="experience-description">
                {/*
                  Consulted clients with various branding goals and visual representations
                */}
              </span>
              <br />
              <span className="experience-details">
                <span className="location">HwaSeong, South Korea</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Atlanta Graphics & Printing</h4>
            <p className="dates">Jan. 2004 - Feb. 2008</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Graphic Designer / Production Manager         </strong>
              <br />
              <span className="experience-description">
                {/*
                  Consulted clients with various branding goals and visual representations
                */}
              </span>
              <br />
              <span className="experience-details">
                <span className="location">Duluth, GA</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Pagoda Jr.<small>(ByeongJeom Campus)</small></h4>
            <p className="dates">... - ...</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Job Title</strong>
              <br />
              <span className="experience-description">
                {/*
                  Consulted clients with various branding goals and visual representations
                */}
              </span>
              <br />
              <span className="experience-details">
                <span className="location">Earth, Milky Way</span>
              </span> 
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h3>Education</h3>
      <div className="experiences">
        <div className="experience row">
          <div className="col-md-4">
            <h4>Fullstack Academy of Code</h4>
            <p className="dates">September 2017</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Immersive Full stack software development program</strong>
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Art Institute of Atlanta</h4>
            <p className="dates">September 2005</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Bachelor of Fine Art, Graphic Design</strong>
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>University of Georgia</h4>
            <p className="dates">2003</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Course work in General Education</strong>
            </p>
          </div>
        </div>
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
