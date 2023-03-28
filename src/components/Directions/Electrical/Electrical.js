import arrayMaping from "components/tools/arrayMaping";
import LanguageContent from "components/tools/LanguageContent";
import s from "./Electrical.module.scss";
import React, { useEffect } from "react";
import io from "../../tools/io";

export default function Electrical() {
  const electrical = LanguageContent("electrical");
  console.log(electrical);
  useEffect(() => {
    io("contentItems", "-5%", "contentAnimation");
  }, []);

  return (
    <div className={s.electrical} id="EL">
      <h4 className={s.subTitle}>{electrical.title}</h4>
      <div
        className={`${s.electricalContent} ${s.animationItems}`}
        id="contentItems"
      >
        <div className={s.electricalImg}>
          <img src={electrical.img} alt={electrical.alt} />
        </div>
        <div className={s.textContainer}>
          <p className={s.subTitle}>{electrical.content}</p>
          {arrayMaping(electrical.list, s.sublist, s.item)}
        </div>
      </div>
    </div>
  );
}
