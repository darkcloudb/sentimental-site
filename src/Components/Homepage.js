import React from "react";
import sakura from "../img/sakura_home.jpeg";
import home from "../img/home.png";

function Homepage() {
  return (
    <div class="paper">
      <img class="homeImg" src={sakura}></img>
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
        <a class="nocss" href="/story/">
          <div class="banner">Story</div>
        </a>
        <a class="nocss" href="/chars/">
          <div class="banner">Characters</div>
        </a>
      </div>
      <div class="container">
        <a class="nocss" href="/download/">
          <div class="banner">Download</div>
        </a>
        <a class="nocss" href="/spec/">
          <div class="banner">About</div>
        </a>
      </div>
      <div class="footer">
        <a class="Split" href="/">
          Top
        </a>
        <a class="Split" href="/concept">
          Concept
        </a>
        <a class="Split" href="/story">
          Story
        </a>
        <a class="Split" href="/chars">
          Characters
        </a>
        <a class="Split" href="/graphic">
          Graphic
        </a>
        <a class="Split" href="/system">
          System
        </a>
        <a class="Split" href="/download">
          Download
        </a>
        <a class="Split" href="/special">
          Special
        </a>
        <a class="Split" href="/spec">
          Spec
        </a>
      </div>
    </div>
  );
}

export default Homepage;
