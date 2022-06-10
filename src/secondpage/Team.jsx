import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
// import { BsLink45Deg } from "react-icons/bs";
import shri from "../images/shri.jpg";
import kiran from "../images/kiran2.jpg";
import purusoth from "../images/purusoth.jpg";
import jaya from "../images/jaya.jpg";

import "../App.css";

const Team = () => {
  return (
    <>
      <h1
        className="capitalize text-center bg-mainbl-200 md:text-5xl text-mainpp-200 
      font-pop font-bold text-3xl pt-14"
        id="team"
      >
        meet the team
      </h1>
      <div id="team_container" className="font-pop">
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={shri} className="shri" alt="profile two" />
            </div>

            <ul className="social-icons">
              <li className="lists">
                <a
                  className="icons"
                  href="https://github.com/shrix1"
                  target="blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>

              <li className="lists">
                <a
                  className="icons"
                  href="https://www.linkedin.com/in/shriprasanna-b-62aab1208/"
                  target="blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                Shriprasanna
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={kiran} className="kiran" alt="profile two" />
            </div>

            <ul className="social-icons">
              <li className="lists">
                <a
                  className="icons"
                  href="https://github.com/kiran0022"
                  target="blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li className="lists">
                <a
                  className="icons"
                  href="https://www.linkedin.com/in/kiran-kumar-k-61ba89203/"
                  target="blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                kiran kumar
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={purusoth} className="purusoth" alt="profile two" />
            </div>

            <ul className="social-icons">
              <li className="lists">
                <a
                  className="icons"
                  href="https://github.com/"
                  target="blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="hover:text-mainpp-100" />
                </a>
              </li>
              <li className="lists">
                <a
                  className="icons"
                  href="https://www.linkedin.com/in/purushothaman-s-7a7a82233/"
                  target="blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>{" "}
            </ul>

            <div className="details users">
              <h2>
                pursusoth
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={jaya} className="jaya" alt="profile two" />
            </div>

            <ul className="social-icons">
              <li className="lists">
                <a
                  className="icons"
                  href="https://github.com/"
                  target="blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li className="lists">
                <a
                  className="icons"
                  href="https://www.linkedin.com/in/jaya-kumar-9a0174226/"
                  target="blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              {/* <li className="lists">
                <a className="icons" href="/">
                  <BsLink45Deg />
                </a>
              </li> */}
            </ul>

            <div className="details users">
              <h2>
                jayaKumar
                <br />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
