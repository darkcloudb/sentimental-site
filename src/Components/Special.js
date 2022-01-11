import React from "react";
import logo from "../img/logo.png";

function Special() {
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
      Special Stuff
    </div>
  );
}

export default Special;
