import React from "react";
import classroom from "../img/classroom.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Story() {
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
        <p class="title">STORY</p>
        <div class="sticky">
          <div class="quote">
            ~IF I WAIT JUST AROUND, THEN NOTHING WILL HAPPEN~
          </div>
          <img class="homeImg" src={classroom}></img>
          <p class="writing">
            You are the protagonist attending your first year of high school
            with your neighbor and childhood friend, Nakano Chiho. Growing up
            the two of you always spent time together. However, in high school
            things began to change. As you spend your high school days enjoying
            your free time, Chiho spends her precious high school days making
            new friends and even joining a club.
          </p>
          <p class="writing">
            This is an important time of your life where your actions will
            forever shift the relationship you have with others for the rest of
            your life. You cannot help but notice that everyone is gossiping
            about your relationship with Chiho and it makes you feel like it
            prevents you from meeting new people.
          </p>
          <p class="writing">
            As the two of you expand your social circles, something becomes
            amiss. Chiho is spending more and more time with Yoshioka-Senpai and
            even talking about him more lately. Is there something going on
            between them? Why do you care? However, perhaps there is a reason
            that you care?
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

export default Story;
