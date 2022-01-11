import React from "react";
import logo from "../img/logo.png";

function Characters() {
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

export default Characters;
