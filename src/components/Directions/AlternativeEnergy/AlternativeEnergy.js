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
    <>
      <article className={s.alternativeSection}>
        <h4 className={s.subTitle}>{alternativeEnergy.title}</h4>
        <section
          className={`${s.directionContent} ${s.animationItems}`}
          id="contentItems"
        >
          <textmodule className={s.textModule}>
            <textcontainer className={s.textContainer}>
              {arrayMaping(alternativeEnergy.items, s.sublist, s.item)}
            </textcontainer>
          </textmodule>

          <img
            className={s.img}
            src={img}
            alt="alternative Energy directions"
          />
        </section>
      </article>

      <section
        className={`${s.directionContent} ${s.animationItems}`}
        id="contentItems"
      >
        {/* <div className={s.contentBlockImg}></div> */}

        <textContainer className={s.textContainer}></textContainer>
      </section>
    </>
  );
}
