import React, { useState } from "react";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState({
    img1: rock,
    img2: paper,
    resultText: "play",
    score: 0,
  });
  let rps = ["rock", "paper", "scissors"];

  let handlePlay = () => {
    let randomNumber1 = Math.floor(Math.random() * 3);
    let personal = rps[randomNumber1];
    let randomNumber2 = Math.floor(Math.random() * 3);
    let computer = rps[randomNumber2];
    console.log(personal);
    console.log(computer);

    if (personal == computer) {
      if (personal == "rock") {
        setData({ ...data, img1: rock, img2: rock, resultText: "It Is A Tie" });
      } else if (personal == "paper") {
        setData({
          ...data,
          img1: paper,
          img2: paper,
          resultText: "It Is A Tie",
        });
      } else if (personal == "scissors") {
        setData({
          ...data,
          img1: scissors,
          img2: scissors,
          resultText: "It Is A Tie",
        });
      }
    } else if (personal == "paper" && computer == "rock") {
      setData({
        ...data,
        score: data.score + 1,
        img1: paper,
        img2: rock,
        resultText: "YOU WIN",
      });
    } else if (personal == "scissors" && computer == "paper") {
      setData({
        ...data,
        score: data.score + 1,
        img1: scissors,
        img2: paper,
        resultText: "YOU WIN",
      });
    } else if (personal == "rock" && computer == "scissors") {
      setData({ 
        ...data,
        score: data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "YOU WIN",
      });
    } else if (computer == "paper" && personal == "rock") {
      setData({
        ...data,
        score: data.score - 1,
        img1: paper,
        img2: rock,
        resultText: "YOU LOSE",
      });
    }
    else if (computer == "scissors" && personal == "paper") {
      setData({
        ...data,
        score: data.score - 1,
        img1: scissors,
        img2: paper,
        resultText: "YOU LOSE",
      });
    }
    else if (computer == "rock" && personal == "scissors") {
      setData({
        ...data,
        score: data.score - 1,
        img1: rock,
        img2: scissors,
        resultText: "YOU LOSE",
      });
    }
     else {
      setData({
        ...data,
        score: data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "YOU WIN",
      });
    }
  };

  return (
    <div className="main">
      <div className="comp">
        <h1>Rock Paper Scissors</h1>
        <div className="score">
          <p className="res1">score</p>
          <p className="res">{data.score}</p>
        </div>
      </div>

      <div className="result">
        <div className="img1">
          <img src={data.img1} alt="" /> <p>You Picked</p>
        </div>
        <div className="img2">
          <img src={data.img2} alt="" />
          <p>The House Picked</p>
        </div>
      </div>

      <div className="reward">
        <h1>{data.resultText} </h1>
        <button
          onClick={() => {
            handlePlay();
          }}
        >
          PLAY AGAIN
        </button>
      </div>

      <button className="btn">Rules</button>
    </div>
  );
};

export default Main;
