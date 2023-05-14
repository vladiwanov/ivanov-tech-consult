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
    <div className={s.avSection} id="av">
      <h4 className={s.subTitle}>{audiovisual.title}</h4>
      <div className={s.avContainer} id="contentItems">
        <div className={s.businessItem}>
          {/* <ul className={s.sublist} id="contentItems"> */}
          {arrayMaping(audiovisual.items, s.sublist, s.item)}
          {/* <ul className={s.sublist}>
            {audiovisual.items.map(item => (
              <li key={getID()} className={s.item}>
                {item}
              </li>
            ))}
          </ul> */}
        </div>
        <img
          src={img7}
          alt="audio-visual systems"
          className={s.img}
          // id="contentItems"
        />
      </div>
    </div>
  );
}
