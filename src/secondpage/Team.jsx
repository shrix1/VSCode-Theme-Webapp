import "../App.css";

import { AiOutlineGithub } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

import { shri } from "../images/shri.jpg";
import { kiran } from "../images/kiran.jpg";
import { purusoth } from "../images/purusoth.jpg";
import { jaya } from "../images/jaya.jpg";

const copy = () => {
  return (
    <>
      <h1 className="heading">Fellows</h1>
      <div id="team_container">
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={purusoth} alt="profile two" />
            </div>

            <ul className="social-icons">
              <li>
                <a href="/">
                  <AiOutlineGithub className="hover:text-mainpp-100" />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                Jane Doe
                <br />
                <span className="job-title">UI Designer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={shri} alt="profile two" />
            </div>

            <ul className="social-icons">
              <li>
                <a href="/">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                Jane Doe
                <br />
                <span className="job-title">UI Designer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={kiran} alt="profile two" />
            </div>

            <ul className="social-icons">
              <li>
                <a href="/">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                Jane Doe
                <br />
                <span className="job-title">UI Designer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={jaya} alt="profile two" />
            </div>

            <ul className="social-icons">
              <li>
                <a href="/">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLink45Deg />
                </a>
              </li>
            </ul>

            <div className="details users">
              <h2>
                Jane Doe
                <br />
                <span className="job-title">UI Designer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default copy;
