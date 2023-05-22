import s from "./FireDefenderSystems.module.scss";
import { useEffect } from "react";
import img from "db/images";
import io from "components/tools/io";
import LanguageContent from "components/tools/LanguageContent";
import arrayMaping from "components/tools/arrayMaping";

export default function FireDefenderSystems() {
  const fire = LanguageContent("fire");
  const { img8 } = img;

  useEffect(() => {
    io("contentItems", "-5%", "contentAnimation");
  }, []);

  return (
    <article className={s.fireSection} id="fire">
      <h4 className={`${s.subTitle}`}>{fire.title}</h4>
      <section
        className={`${s.directionContent} ${s.animationItems}`}
        id="contentItems"
      >
        <img className={s.fireImg} src={img8} alt="fire defender systems" />

        <textmodule className={s.textModule}>
          <textcontainer className={s.textContainer}>
            <p className={s.item}>{fire.details}</p>
            {arrayMaping(fire.items, s.sublist, s.item)}
          </textcontainer>
        </textmodule>
      </section>
    </article>
  );
}
