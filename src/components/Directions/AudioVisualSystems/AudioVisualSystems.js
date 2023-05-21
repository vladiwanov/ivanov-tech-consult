import s from "./AudioVisualSystems.module.scss";
import { useEffect } from "react";
import img from "db/images";
import io from "components/tools/io";
import LanguageContent from "components/tools/LanguageContent";
import arrayMaping from "components/tools/arrayMaping";
export default function AudioVisualSystems() {
  const audiovisual = LanguageContent("audiovisual");

  const { img7 } = img;
  useEffect(() => {
    io("contentItems", "-5%", "contentAnimation");
  }, []);
  return (
    <article className={s.avSection} id="av">
      <h4 className={s.subTitle}>{audiovisual.title}</h4>
      <section
        className={`${s.directionContent} ${s.animationItems}`}
        id="contentItems"
      >
        <textmodule className={s.textModule}>
          <textcontainer className={s.textContainer}>
            {arrayMaping(audiovisual.items, s.sublist, s.item)}
          </textcontainer>
        </textmodule>

        <img
          src={img7}
          alt="audio-visual systems"
          className={s.img}
          // id="contentItems"
        />
      </section>
    </article>
  );
}
