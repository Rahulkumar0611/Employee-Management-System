import React from "react";
import style from "./findcode.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id={style.innermenu}>
      <div className={style.a1}>
        <Link to={'/explore'}>Explore Work</Link>
      </div>
      <div className={style.a1}>
        <Link to={'/abc'}>Hire Talents</Link>
      </div>
      <div className={style.a1}>
        <Link to={'/xyz'}>Dev board</Link>
      </div>
      <div className={style.a1}>
      <Link to={'/Challange'}>Challanges</Link>
      </div>
    </div>
  );
};

export default Menu;
