import s from "./AlternativeEnergy.module.scss";
import { useEffect } from "react";
import io from "components/tools/io";
import img from "../../../images/windgen.webp";
import arrayMaping from "components/tools/arrayMaping";
import LanguageContent from "components/tools/LanguageContent";

export default function AlternativeEnergy() {
  const alternativeEnergy = LanguageContent("alternativeEnergy");

  useEffect(() => {
    io("contentItems", "-5%", "contentAnimation");
  }, []);
  return (
    <article className={s.alternativeSection} id="altenergy">
      <h4 className={s.subTitle}>{alternativeEnergy.title}</h4>
      <section
        className={`${s.directionContent} ${s.animationItems}`}
        id="contentItems"
      >
        <div className={s.textModule}>
          <div className={s.textContainer}>
            {arrayMaping(alternativeEnergy.items, s.sublist, s.item)}
          </div>
        </div>

        <img className={s.img} src={img} alt="alternative Energy directions" />
      </section>
    </article>
  );
}
