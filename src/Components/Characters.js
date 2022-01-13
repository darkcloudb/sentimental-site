import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Characters() {
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
        <div class="title">CHARACTERS</div>
        <p class="charBack">
          <div class="bannerChiho"></div>
          <div class="hide">
            Nakano Chiho, your childhood friend and potential girlfriend / wife
            of Yoshioka-senpai.
          </div>

          <div class="bannerYoshioka"></div>
          <div class="hide">
            Yoshioka-Senpai, a student a year above you and Chiho. He and Chiho
            both attend the art club and is your rival for her affection.
          </div>

          <div class="bannerYuu"></div>
          <div class="hide">
            Yuu, The protagonist and his actions are determined by you.
          </div>
        </p>
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

export default Characters;
