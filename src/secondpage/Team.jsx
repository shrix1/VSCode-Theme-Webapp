import React, { Component } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

import shri from "../images/shri.jpg";
import kiran from "../images/kiran.jpg";
import purusoth from "../images/purusoth.jpg";
import jaya from "../images/jaya.jpg";

import "../App.css";

const Team = () => {
  return (
    <>
      <div id="team_container">
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={shri} className="shri" alt="profile two" />
            </div>

            <ul className="social-icons">
              <li className="lists">
                <a className="icons" href="/">
                  <BsGithub />
                </a>
              </li>

              <li className="lists">
                <a className="icons" href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                Shriprasanna
                <br />
                {/* <span className="job-title">UI Designer</span> */}
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
                <a className="icons" href="/">
                  <BsGithub />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                kiran kumar
                <br />
                {/* <span className="job-title">UI Designer</span> */}
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
                <a className="icons" href="/">
                  <AiOutlineGithub className="hover:text-mainpp-100" />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                pursusoth
                <br />
                {/* <span className="job-title">UI Designer</span> */}
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
                <a className="icons" href="/">
                  <BsGithub />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="lists">
                <a className="icons" href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                jayaKumar
                <br />
                {/* <span className="job-title">UI Designer</span> */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
