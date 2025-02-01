import s from "./Hero.module.scss";
import React from "react";
import LanguageButton from "components/LanguageButton/LanguageButton";
import LanguageContent from "components/tools/LanguageContent";
import AppBar from "components/AppBar";
import Benefits from "components/Benefits";
import TestTest from "components/Submit/TestTest";
import Submit from "components/Submit";

export default function Hero() {
  const hero = LanguageContent("hero");
  return (
    <div>
      <div>
        <section className={s.textItem}>
          <AppBar />
          <div className={s.heroTextContainer}>
            <b>{hero.subtitle}</b>
            <h1>{hero.title}</h1>
            <b>{hero.submit}</b>
          </div>
          <Submit />
        </section>
      </div>
    </div>
  );
}
