import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import sakura from "../img/sakura_home.jpeg";
import home from "../img/home.png";

function Homepage() {
  return (
    <div class="white">
      <div class="NavBar">
        <img class="Icon" src={logo}></img>
        <Link class="Split" to="/">
          Top
        </Link>
        <Link class="Split" to="/concept">
          Concept
        </Link>
        <Link class="Split" to="/story">
          Story
        </Link>
        <Link class="Split" to="/chars">
          Characters
        </Link>
        <Link class="Split" to="/reason">
          Reason
        </Link>
        <Link class="Split" to="/system">
          System
        </Link>
        <Link class="Split" to="/download">
          Download
        </Link>
        <Link class="Split" to="/special">
          Special
        </Link>
        <Link class="Split" to="/spec">
          Spec
        </Link>
      </div>
      <div class="paper">
        <img class="homeImg" src={home}></img>
        <div class="chalkboard">
          {" "}
          What's New:
          <ul>
            5/1/2022 After short hiatus due to PC issues, project is back in
            progress!
          </ul>
          <ul>2/22/2022 Demo Version 1.1! in QA!</ul>
          <ul>
            1/10/2022 Website Updated to include: <br></br>
            <ul>Additional site pages added.</ul>
          </ul>
          <ul>
            1/7/2022 Website Pages Complete: <br></br>
            <ul>Website updated!</ul>
          </ul>
          <ul>1/4/2022 Website Development began!</ul>
          <ul>
            12/24/2021 Demo Version 1.02 almost out!&nbsp;
            <Link class="nocss" to="/download/">
              More Info
            </Link>
          </ul>
          <ul>
            10/30/2021 Demo Version 1.01 out now!&nbsp;
            <Link class="nocss" to="/download/">
              More Info
            </Link>
          </ul>
        </div>
        <div class="container">
          <Link class="nocss" to="/story/">
            <div class="banner">Story</div>
          </Link>
          <Link class="nocss" to="/chars/">
            <div class="bannerY">Characters</div>
          </Link>
        </div>
        <div class="container">
          <Link class="nocss" to="/download/">
            <div class="bannerM">Download</div>
          </Link>
          <Link class="nocss" to="/spec/">
            <div class="banner">About</div>
          </Link>
        </div>
        <div class="footer">
          <Link class="Split" to="/">
            Top
          </Link>
          <Link class="Split" to="/concept">
            Concept
          </Link>
          <Link class="Split" to="/story">
            Story
          </Link>
          <Link class="Split" to="/chars">
            Characters
          </Link>
          <Link class="Split" to="/reason">
            Reason
          </Link>
          <Link class="Split" to="/system">
            System
          </Link>
          <Link class="Split" to="/download">
            Download
          </Link>
          <Link class="Split" to="/special">
            Special
          </Link>
          <Link class="Split" to="/spec">
            Spec
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
