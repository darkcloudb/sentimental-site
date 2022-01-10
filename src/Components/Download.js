import React from "react";
import title from "../img/home.png";
import screenshot from "../img/home.png";
import SL from "../img/sentimental.jpeg";
import yuna from "../img/yuna itou.jpeg";

function Download() {
  return (
    <div class="paper">
      <p class="title">
        DOWNLOAD&nbsp;
        <a href="/">Top</a>
      </p>
      <div class="white">
        <div class="bannerBox">「Sentimental Love」 Download</div>
        <div class="dlcontainer">
          <img class="dlImg" src={title}></img>
          <img class="dlImg" src={screenshot}></img>
        </div>
        <p>Game can be downloaded here from Google</p>
        <div class="bannerBox">「Sentimental Love」Opening</div>
        <div class="dlcontainer">
          <img class="dlImg" src={SL}></img>
        </div>
        <div>
          Song: Sentimental Love <br></br>
          Artist: みみめめMIMI | MimimemeMIMI
        </div>
        <div class="bannerBox">「Sentimental Love」Ending</div>
        <div class="dlcontainer">
          <img class="dlImg" src={yuna}></img>
        </div>
        <div>
          Song: Alone Again<br></br>
          Artist: 伊藤 由奈 | Yuna Ito
        </div>
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
  );
}

export default Download;
