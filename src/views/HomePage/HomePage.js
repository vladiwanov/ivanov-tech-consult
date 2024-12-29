import React from "react";
import Benefits from "../../components/Benefits";
import Hero from "../../components/Hero";
import Business from "../../components/Business";
import Team from "../../components/Team";
import Footer from "components/Footer";
// import Test from 'components/Test';
import s from "./HomePage.module.scss";
import BGParallax from "components/BGParallax";

export default function HomePage() {
  return (
    <div className={s.parallax}>
      {/* // <div className={s}> */}
      {/* <Test /> */}
      {/* <section className={`${s.bg} ${s.hero}`}></section> */}
      <BGParallax />
      <div>
        <Hero />
        <Benefits />
        <Business />
        <Team />
        <Footer />
      </div>
    </div>
  );
}
