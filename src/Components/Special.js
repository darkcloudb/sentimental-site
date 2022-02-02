import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import chiho_smile from "../img/chiho_smile.png";
import Yuu from "../img/Yuu2.png";
import classroom from "../img/classroom.png";
import heart from "../img/heart.png";

function Special() {
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
        <p class="title">SPECIAL</p>
        <div class="sticky">
          <p class="quote">Character Design</p>
          <div class="arrow-up"></div>
          <img src={chiho_smile}></img>
          <dic class="line"></dic>
          <img src={Yuu}></img>
          <p class="writing">Created using: Sutemo's Character Creator</p>
          <p class="quote">Background Images</p>
          <img class="homeImg" src={classroom}></img>
          <p class="writing">Created by:</p>
          <p class="quote">Music</p>
          <p class="writing">Various artists and BGM were used.</p>
          <p class="quote">Engine</p>
          <p class="writing">Made with Ren'Py and Python</p>
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

export default Special;
