import React, { useState } from "react";
import memesData from "../memesData";

export default function Form() {
  const [memeImage, setMemeImage] = useState();
  function getMemeImage(event) {
    const memesArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);

    setMemeImage(memesArr[randomNumber].url);
  }

  return (
    <main>
      <div onClick={getMemeImage} className="submit">
        Get a new meme image 🖼
      </div>
      <img className="memeImage" src={memeImage} alt="meme" />
    </main>
  );
}
