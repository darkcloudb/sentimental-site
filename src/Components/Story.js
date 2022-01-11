import React from "react";
import classroom from "../img/classroom.png";
import logo from "../img/logo.png";

function Story() {
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

export default Story;
