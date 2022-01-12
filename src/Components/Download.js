import React from "react";
import title from "../img/Title.png";
import screenshot from "../img/screenshot.png";
import SL from "../img/sentimental.jpeg";
import yuna from "../img/yuna itou.jpeg";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Download() {
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
        <p class="title">DOWNLOAD</p>
        <div class="white">
          <div class="bannerBox">「Sentimental Love」 Download</div>
          <div class="dlcontainer">
            <img class="dlImg" src={title}></img>
            <img class="dlImg" src={screenshot}></img>
          </div>
          <p>Game can be downloaded here from Google</p>
          <table class="downloadHere">
            <tr>
              <th>Download</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>
                <Link class="linknocss" to="/">
                  Windows Demo
                </Link>
              </td>
              <td class="linknocss">Demo v1.01</td>
            </tr>
            <tr>
              <td>
                <Link class="linknocss" to="/">
                  Mac Demo
                </Link>
              </td>
              <td class="linknocss">Demo v1.02</td>
            </tr>
          </table>
          <div class="bannerBox">「Sentimental Love」Opening</div>
          <div class="dlcontainer">
            <img class="dlImg" src={SL}></img>
          </div>
          <div>
            Song: Sentimental Love <br></br>
            Artist: みみめめMIMI | MimimemeMIMI
          </div>
          <table class="downloadHere">
            <tr>
              <th>Download</th>
              <th>Name</th>
            </tr>
            <tr>
              <td>
                <Link class="linknocss" to="/">
                  Song
                </Link>
              </td>
              <td class="linknocss">Song</td>
            </tr>
            <tr>
              <td>
                <Link class="linknocss" to="/">
                  Video
                </Link>
              </td>
              <td class="linknocss">Opening Video</td>
            </tr>
          </table>
          <div class="bannerBox">「Sentimental Love」Ending</div>
          <div class="dlcontainer">
            <img class="dlImg" src={yuna}></img>
          </div>
          <div>
            Song: Alone Again<br></br>
            Artist: 伊藤 由奈 | Yuna Ito
          </div>
          <table class="downloadHere">
            <tr>
              <th>Download</th>
              <th>Name</th>
            </tr>
            <tr>
              <td>
                <Link class="linknocss" to="/">
                  Song
                </Link>
              </td>
              <td class="linknocss">Song</td>
            </tr>
            <tr>
              <td>
                <Link class="linknocss" to="/">
                  Video
                </Link>
              </td>
              <td class="linknocss">Opening Video</td>
            </tr>
          </table>
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

export default Download;
