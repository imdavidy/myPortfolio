import React from 'react';
import {render} from 'react-dom';

export default function contact(props) {
  return (
    <div className="background-gray">
      <div className="container" id="contact">
        <h2>Contact</h2>
        <div className="contact row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="center">
              <p>
                <a  href="mailto:imdavidy@gmail.com">
                  <i className="fas fa-envelope fa-lg"></i> imdavidy@gmail.com
                </a>
                <br />
                <a  href="https://www.linkedin.com/in/david-yoon-4530538b/" target="_blank">
                  <i className="fab fa-linkedin fa-lg"></i> linkedin.com/in/david-yoon-4530538b
                </a>
                <br />
                <a  href="https://github.com/imdavidy" target="_blank">
                  <i className="fab fa-github fa-lg"></i> github.com/imdavidy
                </a>
                <br />
                <a  href="https://drive.google.com/file/d/16KhHcAm9jwme8l29989WsOdNckHhWjfT/view?usp=sharing" target="_blank">
                  <i className="far fa-file-pdf fa-lg" /> David_Yoon-Resume.pdf
                </a>
              </p>
            </div>
            <p>
              Written and coded by David Yoon<br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}