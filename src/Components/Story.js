import React from "react";
import classroom from "../img/home.png";

function Story() {
  return (
    <div class="paper">
      <p class="title">STORY</p>
      <div class="sticky">
        <div class="quote">~IF I WAIT AROUND, THEN NOTHING WILL HAPPEN~</div>
        <img class="homeImg" src={classroom}></img>
        <p class="writing">
          Growing up with your neighbor and childhood friend, Chiho, the two of
          you always spent time together. However, in high school things began
          to change. As you spend your high school days enjoying your free time,
          Chiho spends her precious high school days making new friends and even
          joining a club.
        </p>
        <p class="writing">
          This is an important time of your life where your actions will forever
          shift the relationship you have with others for the rest of your life.
          You cannot help but notice that everyone is gossiping about your
          relationship with Chiho and it makes you feel like it prevents you
          from meeting new people.
        </p>
      </div>
    </div>
  );
}

export default Story;
