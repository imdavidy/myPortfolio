import React from 'react';
import {render} from 'react-dom';

// let myStyle = {
//   backgroundColor: yellow
// };
export default function profile(props) {
  return (
    <div className="container" id="profile">
      <h2>Profile</h2>
      <p>A Humble Creative Software Engineer</p>
      <hr />
      <div className="row">
        <div className="col-md-8">
          <h3>About me</h3>
          <p>
            Hi! I'm a full-stack software engineer with background of 10+ years in graphic design. Having come from a creative background coupled with the analytical skills of a full stack developer, it's a synergy that is very rare and valuable. I believe it’s an indispensable and vital asset for any company or organization to thrive and succeed in the future.
            <br />
            As an accomplished professional with multiple background demonstrating stellar adaptation and problem solving skills across multiple mediums, I have international work experience utilizing English and Korean bilingual ability in the workplace.
            <br />
            I love gaining new tools under my belt, to introduce the most up to date technology into all projects for a most affective and efficient solution possible.
          </p>
        </div>
        <div className="col-md-4">
          <div className="img-thumbnail">
            <img src="./img/myProfilePic.jpg" />
            <p>
              <small>Amazing, caught in the wild, profile picture*<br/>
              <small>*Not scale to size. Maybe larger in real life
              </small>
              </small>
            </p>
          </div>
          <h3>Details</h3>
          <p>
            <strong>Name:</strong>
            <br />
            David Yoon
            <br />
            <strong>Location:</strong>
            <br />
            New York, NY
          </p>
        </div>
      </div>
    </div>
  )
}
