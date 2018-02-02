import React from 'react';
import {render} from 'react-dom';

export default function profile(props) {
  return (
    <div className="container">
      <h2>Profile</h2>
      <p>A humble creative JavaScript developer</p>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <img src="./img/myProfilePic.jpg" style={{display:"block", width:"100%"}}/>
          <h3>About me</h3>
          <p>
            Full stack software engineer with previous background 10+ years in graphic design. Having come from a creative background coupled with the analytical skills of a full stack developer, they form a synergy that is very rare and valuable. I believe it’s an indispensable and vital asset for any company or organization to be comprised of to grow. My full stack knowledge is comprised of JavaScript, Node.js, Express, React, Sequelize and PostgresSQL.
          
            Accomplished professional with multiple background demonstrating stellar adaptation and problem solving skills across multiple mediums.
            Has international work experience utilizing English and Korean bilingual ability in the workplace.
            
            Strives to introduce the most up to date technology into all projects for a most affective and efficient solution possible.
          </p>
        </div>
      </div>
    </div>
  )
}