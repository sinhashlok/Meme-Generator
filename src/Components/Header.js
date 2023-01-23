import React from "react";
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header>
      <img className="trollFace" src={trollFace} alt="troll face" />
      <h2 className="headerTitle">Meme Generator</h2>
    </header>
  );
}
