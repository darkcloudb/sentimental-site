import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import concept from "../img/concept.jpg";

function Concept() {
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
        <div class="title">CONCEPT</div>
        <div class="sticky">
          <p class="writing">
            <p class="quote">You were always together yet...</p>
            <div class="conceptContainer">
              <p class="conQuote">
                Chiho and you were inseperable during elementary and middle
                school years. Yet in high school things began to change... How
                the story unfolds depends on your decisions throughout the game!
              </p>
              <img class="polaroid" src={concept}></img>
            </div>
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

export default Concept;
