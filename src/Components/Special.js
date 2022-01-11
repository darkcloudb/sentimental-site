import React from "react";
import logo from "../img/logo.png";

function Special() {
  return (
    <div class="white">
      <div class="NavBar">
        <img class="Icon" src={logo}></img>
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
      Special Stuff
    </div>
  );
}

export default Special;
