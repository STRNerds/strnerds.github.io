import React from "react";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <>
      <div>
        <h1 className="AboutUsHeader">About Us</h1>
        <p className="AboutUsDescription">STRNerds is a small group of students who are learning computer science</p>
      </div>
      <div className="people">
        <div className="profiles">
            <img src="bomber.png" id="Rad0" className="pfp"></img>
            <p className="profileDescription">THE Progammer</p>
        </div>
        <div className="profiles">
            <img src="bomber.png" id="Rad1" className="pfp"></img>
            <p className="profileDescription">THE Progammer</p>
        </div>
        <div className="profiles">
            <img src="bomber.png" id="Rad2" className="pfp"></img>
            <p className="profileDescription">THE Progammer</p>
        </div>
        <div className="profiles">
            <img src="bomber.png" id="Rad3" className="pfp"></img>
            <p className="profileDescription">THE Progammer</p>
        </div>
        <div className="profiles">
            <img src="bomber.png" id="Rad4" className="pfp"></img>
            <p className="profileDescription">THE Progammer</p>
        </div> 
      </div>
    </>
    
  );
}

export default AboutUsPage;
