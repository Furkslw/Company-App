import { Feature } from "@/components";
import React from "react";

const AboutUs = () => {
  return (
    <div className="HL__aboutUs section__margin" id="aboutUs">
      {/* <div  className='HL__aboutUs-feature'>
        <Feature title={"HouseLabss Kimdir?"}  text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}/>
      </div> */}
      <div className="HL__aboutUs-heading">
        <h1 className="gradient__text">
          {" "}
          Hayal edebileceğinizden çok daha kolay
        </h1>
      </div>
      <div className="HL__aboutUs-container">
        <Feature
          title={"Sosyal Medya"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
          }
        />
        <Feature
          title={"Reklam"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
          }
        />
        <Feature
          title={"Web Sitesi"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
          }
        />
      </div>
    </div>
  );
};

export default AboutUs;
