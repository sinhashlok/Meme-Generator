import React, { useState, useEffect } from "react";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImg: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  // API call
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  // console.log(meme);

  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));

    event.preventDefault();
  }

  return (
    <main>
      <form>
        <div className="form">
          <input
            type="text"
            id="up"
            placeholder="Top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            id="down"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage} className="submit" type="submit">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImg} className="memeImage" alt="meme" />
        <h2 className="memeText top">{meme.topText}</h2>
        <h2 className="memeText bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
