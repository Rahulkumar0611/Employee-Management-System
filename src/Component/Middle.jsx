import React from "react";
import style from "./findcode.module.css";

const Middle = () => {
  return (
    <div id={style.Center}>
      <div id={style.para}>
        <h1>The Only Platform To</h1>
        <h2>Show Off Your Skills</h2>
        <p>
          Collab or hire coders with no middleman. An open platform to <br />
          hire coders based on skills and Projects.
        </p>
        <div className={style.hire}>
          <button id={style.exp}>EXPLORE WORK</button>
          <button id={style.Hire}>HIRE TALENTS</button>
        </div>
      </div>
      <div id={style.img1}>
        <img src="https://www.findcoder.io/landing/icon.svg" alt="" />
      </div>
    </div>
  );
};

export default Middle;
