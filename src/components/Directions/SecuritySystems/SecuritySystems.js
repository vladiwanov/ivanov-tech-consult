import s from "./SecuritySystems.module.scss";
import React from "react";
import img from "db/images";
import { useEffect } from "react";
import io from "components/tools/io";
import arrayMaping from "components/tools/arrayMaping";
import LanguageContent from "components/tools/LanguageContent";

export default function SecuritySystems() {
  const securitySystems = LanguageContent("securitySystems");

  const { img6 } = img;
  useEffect(() => {
    io("secsystems", "-5%", "contentAnimation");
  }, []);
  return (
    <article
      className={s.secsystems}
      id="security"
      // style={{ backgroundColor: '#473926' }}
    >
      <h4 className={s.subTitle}>{securitySystems.title}</h4>
      <section
        className={`${s.directionContent} ${s.animationItems}`}
        // className={`${s.cotentContainer} ${s.animationItems}`}
        id="secsystems"
      >
        <div className={s.textModule}>
          <div className={s.textContainer}>
            <ul className={s.sublist}>
              <li className={s.item}>
                {securitySystems.items1}
                {arrayMaping(securitySystems.content, "", s.item)}
              </li>
              {securitySystems.items2.map((item, i) => (
                <li key={i} className={s.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.contentBlockImg}></div>
        {/* <img className={s.img} src={img6} alt="secutity systems" /> */}

        {/* <img className={s.securityImg} src={img6} /> */}
      </section>
    </article>
  );
}
