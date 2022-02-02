import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Spec() {
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
        <p class="title">SPECS</p>
        <div class="sticky">
          <p class="quote">Credits and Special Thanks</p>
          <p class="credit">Title: Sentimental Love</p>
          <p class="credit">Brand: JRPG Dreamers</p>
          <p class="credit">Release Date: To be announced!</p>
          <p class="credit">Genre: Visual Novel Adventure</p>
          <p class="credit">Price: Free $0.00 | ￥０</p>
          <div>Staff</div>
        </div>
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
  );
}

export default Spec;
