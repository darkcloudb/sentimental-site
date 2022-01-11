import React from "react";
import logo from "../img/logo.png";
import sakura from "../img/sakura_home.jpeg";
import home from "../img/home.png";

function Homepage() {
  return (
    <div class="white">
      <div class="NavBar">
        <img class="Icon" src={logo}></img>
        <a class="Split" href="/sentimental-site">
          Top
        </a>
        <a class="Split" href="/sentimental-site/concept">
          Concept
        </a>
        <a class="Split" href="/sentimental-site/story">
          Story
        </a>
        <a class="Split" href="/sentimental-site/chars">
          Characters
        </a>
        <a class="Split" href="/sentimental-site/graphic">
          Graphic
        </a>
        <a class="Split" href="/sentimental-site/system">
          System
        </a>
        <a class="Split" href="/sentimental-site/download">
          Download
        </a>
        <a class="Split" href="/sentimental-site/special">
          Special
        </a>
        <a class="Split" href="/sentimental-site/spec">
          Spec
        </a>
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
            <a class="nocss" href="/download/">
              More Info
            </a>
          </ul>
          <ul>
            10/30/2021 Demo Version 1.01 out now!&nbsp;
            <a class="nocss" href="/download/">
              More Info
            </a>
          </ul>
        </div>
        <div class="container">
          <a class="nocss" href="/sentimental-site/story/">
            <div class="banner">Story</div>
          </a>
          <a class="nocss" href="/sentimental-site/chars/">
            <div class="banner">Characters</div>
          </a>
        </div>
        <div class="container">
          <a class="nocss" href="/sentimental-site/download/">
            <div class="banner">Download</div>
          </a>
          <a class="nocss" href="/sentimental-site/spec/">
            <div class="banner">About</div>
          </a>
        </div>
        <div class="footer">
          <a class="Split" href="/sentimental-site">
            Top
          </a>
          <a class="Split" href="/sentimental-site/concept">
            Concept
          </a>
          <a class="Split" href="/sentimental-site/story">
            Story
          </a>
          <a class="Split" href="/sentimental-site/chars">
            Characters
          </a>
          <a class="Split" href="/sentimental-site/graphic">
            Graphic
          </a>
          <a class="Split" href="/sentimental-site/system">
            System
          </a>
          <a class="Split" href="/sentimental-site/download">
            Download
          </a>
          <a class="Split" href="/sentimental-site/special">
            Special
          </a>
          <a class="Split" href="/sentimental-site/spec">
            Spec
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
