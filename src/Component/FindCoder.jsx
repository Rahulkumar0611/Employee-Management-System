import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Btn from "./Btn";
import Middle from "./Middle";
import style from "./findcode.module.css";

const FindCoder = () => {
  return (
    <div>
    <section id={style.nav}>
      <article>
        <div className={style.Logo}>
          <Logo />
        </div>
        <div className={style.Menu}>
          <Menu />
        </div>
        <div className={style.Btn}>
          <Btn />
        </div>
      </article>
    </section>
    <div className={style.Middle}>
      <Middle/>
    </div>
   
    </div>
  );
};

export default FindCoder;
