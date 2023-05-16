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
        {/* <imageBlock className={s.contentBlockImg}></imageBlock> */}
        {/* <imageContainer className={s.directionImg}>
          <img
            src={electrical.img}
            alt={electrical.alt}
            className={s.directionImage}
          />
        </imageContainer> */}
        <textContainer className={s.textContainer}>
          <p className={s.subTitle}>{electrical.content}</p>
          {arrayMaping(electrical.list, s.sublist, s.item)}
        </textContainer>
      </section>
    </article>
  );
}
