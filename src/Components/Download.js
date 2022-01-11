import React from "react";
import title from "../img/Title.png";
import screenshot from "../img/screenshot.png";
import SL from "../img/sentimental.jpeg";
import yuna from "../img/yuna itou.jpeg";
import logo from "../img/logo.png";

function Download() {
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
        <p class="title">DOWNLOAD</p>
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

export default Download;
