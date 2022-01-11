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
        <Link class="Split" href="/sentimental-site">
          Top
        </Link>
        <Link class="Split" href="/sentimental-site/concept">
          Concept
        </Link>
        <Link class="Split" href="/sentimental-site/story">
          Story
        </Link>
        <Link class="Split" href="/sentimental-site/chars">
          Characters
        </Link>
        <Link class="Split" href="/sentimental-site/graphic">
          Graphic
        </Link>
        <Link class="Split" href="/sentimental-site/system">
          System
        </Link>
        <Link class="Split" href="/sentimental-site/download">
          Download
        </Link>
        <Link class="Split" href="/sentimental-site/special">
          Special
        </Link>
        <Link class="Split" href="/sentimental-site/spec">
          Spec
        </Link>
      </div>
      <div class="paper">
        <img class="homeImg" src={home}></img>
        <div class="chalkboard">
          {" "}
          What's New:
          <ul>
            1/10/2022 Website Updated to include: <br></br>
            <ul>
              * System<br></br>* Download
            </ul>
          </ul>
          <ul>
            1/7/2022 Website Pages Complete: <br></br>
            <ul>
              * Top<br></br>* Story<br></br>* Characters
            </ul>
          </ul>
          <ul>1/4/2022 Website Development began!</ul>
          <ul>
            12/24/2021 Demo Version 1.02 almost out!&nbsp;
            <Link class="nocss" href="/download/">
              More Info
            </Link>
          </ul>
          <ul>
            10/30/2021 Demo Version 1.01 out now!&nbsp;
            <Link class="nocss" href="/download/">
              More Info
            </Link>
          </ul>
        </div>
        <div class="container">
          <Link class="nocss" href="/sentimental-site/story/">
            <div class="banner">Story</div>
          </Link>
          <Link class="nocss" href="/sentimental-site/chars/">
            <div class="banner">Characters</div>
          </Link>
        </div>
        <div class="container">
          <Link class="nocss" href="/sentimental-site/download/">
            <div class="banner">Download</div>
          </Link>
          <Link class="nocss" href="/sentimental-site/spec/">
            <div class="banner">About</div>
          </Link>
        </div>
        <div class="footer">
          <Link class="Split" href="/sentimental-site">
            Top
          </Link>
          <Link class="Split" href="/sentimental-site/concept">
            Concept
          </Link>
          <Link class="Split" href="/sentimental-site/story">
            Story
          </Link>
          <Link class="Split" href="/sentimental-site/chars">
            Characters
          </Link>
          <Link class="Split" href="/sentimental-site/graphic">
            Graphic
          </Link>
          <Link class="Split" href="/sentimental-site/system">
            System
          </Link>
          <Link class="Split" href="/sentimental-site/download">
            Download
          </Link>
          <Link class="Split" href="/sentimental-site/special">
            Special
          </Link>
          <Link class="Split" href="/sentimental-site/spec">
            Spec
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
