import React from "react";
import sakura from "../img/sakura_home.jpeg";
import home from "../img/home.png";

function Homepage() {
  return (
    <div class="paper">
      <img class="homeImg" src={sakura}></img>
      {/* <div class="paper"> */}
      <div class="chalkboard">
        {" "}
        What's New:
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
      {/* </div> */}
    </div>
  );
}

export default Homepage;
