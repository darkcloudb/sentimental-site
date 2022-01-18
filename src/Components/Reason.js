import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import sakura from "../img/sakura_home.jpeg";

function Reason() {
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
        <div class="title">Reason</div>
        <div class="sticky">
          <div class="quote">Side Project</div>
          <img class="homeImg" src={sakura}></img>
          <p class="writing">
            I wish to dedicate this page to express why I am making this website
            and why am I making this game. Growing up, video games had always
            played a big role in my life as a hobby and potential career.
            However, despite this I never actually learned how to code in
            college and it was not until COVID-19 hit that I decided to finally
            sat down and learn how to code.
          </p>
          <p class="writing">
            While learning how to code, my facilitator / instructor mentioned
            that a fellow classmate was also interested in making a game.
            Together we were able to make a short demo of a SNES era JRPG in
            just 4 days. After that little project was completed the same
            instructor mentioned the platform / engine Ren'py. After some
            research I decided to give it a try after learning Python.
          </p>
          <p class="writing">
            In short, making this visual novel is a personal goal of mine to
            demonstrate that I can pick up any platform or engine and work with
            it. This website was created to keep my React / JavaScript skills
            sharp.
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

export default Reason;
