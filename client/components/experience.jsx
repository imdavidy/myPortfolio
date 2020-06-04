import React from 'react';
import {render} from 'react-dom';

export default function experience(props) {
  return (
    <div className="background-white">
      <div className="container" id="experience">
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
            <h4>CircleBlack, Inc.</h4>
            <p className="dates">July. 2018 - Present</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Software Engineer</strong>
              <br />
              <span className="experience-description">
                {/*
                  Consulted clients with various branding goals and visual representations
                */}
              </span>
              <br />
              <span className="experience-details">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Columbus, GA</span>
              </span>
            </p>
          </div>
        </div>
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
                •	Built/maintained APIs to aggregate and process financial data of billions in assets from multiple sources, internal and external;
                •	Built/maintained multiple frontend client apps and internal data processing tools and utilities;
                •	Designed/developed/tested development tickets;
                •	Worked in Agile methodology
              </span>
              <br />
              <span className="experience-details">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Jersey City, NJ</span>
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
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;HwaSeong, South Korea</span>
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
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;HwaSeong, South Korea</span>
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
                •	Worked with 2500+ clients from conceptualizing to production of the finished product;
                <br />
                •	Moved publishing platform from Corel to Adobe which increased efficiency and quality control 150%;
                <br />
                •	Increased product portfolio by consulting in purchase of new equipment;
              </span>
              <br />
              <span className="experience-details">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Duluth, GA</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Washington Printing</h4>
            <p className="dates">Jan. 2003 - Aug. 2003</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Graphic Designer / Production Manager</strong>
              <br />
              <span className="experience-description">
                • Planned and worked with clients to develop ads for local phone directory;
                <br />
                •	Designed collaterals to be printed;
              </span>
              <br />
              <span className="experience-details">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Doraville, GA</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>Foryou.com, Inc.</h4>
            <p className="dates">Aug. 2000 - Mar. 2001</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Web Graphic Designer/Developer</strong>
              <br />
              <span className="experience-description">
                •	Took part in structure, design, creation, and publication of web sites, including one of top 3 national news media company;
                <br />
                •	Using experience in graphic design and web site development, guided new designers and programmers to work coherently and efficiently;
              </span>
              <br />
              <span className="experience-details">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Seoul, South Korea</span>
              </span> 
            </p>
          </div>
        </div>
        <div className="experience row">
          <div className="col-md-4">
            <h4>KoaLife Magazine</h4>
            <p className="dates">May 1999 - Aug. 2002</p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Senior Graphic Designer</strong>
              <br />
              <span className="experience-description">
                •	Took part in creating a premium ad design market in Korean-American community where design and development of ads became a paid product;
                <br />
                •	Developed layout and identity system of magazine;
                <br />
                •	Created and prepared various print pieces;
              </span>
              <br />
              <span className="experience-details">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Doraville, GA</span>
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
    </div>
  </div>
  )
}
