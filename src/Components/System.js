import React from "react";
import choice from "../img/choice.png";
import outcome from "../img/outcome.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function System() {
  return (
    <div class="white">
      <div class="NavBar">
        <img class="Icon" src={logo} alt="icon"></img>
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
        <Link class="Split" to="/graphic">
          Graphic
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
        <div class="title">SYSTEM</div>
        <div class="sticky">
          <p class="quote">Choices</p>
          <img class="homeImg" src={choice} alt="choice"></img>
          <p>
            Throughout the game you will be presented with dialogue options.
            Choosing an option will affect how your relationship with Chiho.
          </p>
          <p class="quote">System</p>
          <img class="homeImg" src={outcome} alt="outcome"></img>
          <p>
            Every dialogue option you take will either increase or decrease your
            friendship with Chiho. This value is hidden so save often and
            experiment.
          </p>
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
          <Link class="Split" to="/graphic">
            Graphic
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

export default System;
