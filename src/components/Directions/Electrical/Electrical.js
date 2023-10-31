import arrayMaping from "components/tools/arrayMaping";
import LanguageContent from "components/tools/LanguageContent";
import s from "./Electrical.module.scss";
import React, { useEffect } from "react";
import io from "../../tools/io";

export default function Electrical() {
  const electrical = LanguageContent("electrical");
  useEffect(() => {
    io("contentItems", "-5%", "contentAnimation");
  }, []);

  return (
    <article className={s.electrical} id="EL">
      <h4 className={s.subTitle}>{electrical.title}</h4>
      <section
        className={`${s.directionContent} ${s.animationItems}`}
        id="contentItems"
      >
        <div className={s.contentBlockImg}></div>
        <section className={s.textModule}>
          <div className={s.textContainer}>
            <b className={s.subTitle}>{electrical.content}</b>
            {arrayMaping(electrical.list, s.sublist, s.item)}
          </div>
        </section>
      </section>
    </article>
  );
}
