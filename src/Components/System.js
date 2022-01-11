import React from "react";
import choice from "../img/choice.png";
import outcome from "../img/outcome.png";
import logo from "../img/logo.png";

function System() {
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
      <div class="paper">
        <div class="title">SYSTEM</div>
        <div class="sticky">
          <p class="quote">Choices</p>
          <img class="homeImg" src={choice}></img>
          <p>
            Throughout the game you will be presented with dialogue options.
            Choosing an option will affect how your relationship with Chiho.
          </p>
          <p class="quote">System</p>
          <img class="homeImg" src={outcome}></img>
          <p>
            Every dialogue option you take will either increase or decrease your
            friendship with Chiho. This value is hidden so save often and
            experiment.
          </p>
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
    </div>
  );
}

export default System;
