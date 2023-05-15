import s from "./ConsultingDirection.module.scss";
import { useEffect } from "react";
import io from "components/tools/io";
import img from "../../../images/tech2.jpg";
import arrayMaping from "components/tools/arrayMaping";
import LanguageContent from "components/tools/LanguageContent";

export default function ConsultingDirection() {
  const consulting = LanguageContent("consulting");
  useEffect(() => {
    io("contentItems", "-5%", "contentAnimation");
  }, []);
  return (
    <>
      <section className={s.consultingSection} id="consult">
        <div className={s.consultContainer}>
          <h3 className={s.subTitle}>{consulting.title}</h3>
          <div className={s.consultingContainer} id="contentItems">
            <div className={s.image2}>
              <img src={img} className={s.img} />
            </div>
            <div className={`item ${s.businessItem}`}>
              <h4 className={s.subTitle}>{consulting.subtitle[0]}</h4>
              <div className={s.animationItems} id="contentItems">
                {arrayMaping(consulting.items1, s.sublist, s.item)}
              </div>
              <h4 className={s.subTitle}>{consulting.subtitle[1]}</h4>
              <div className={s.animationItems} id="contentItems">
                {arrayMaping(consulting.items2, s.sublist, s.item)}
              </div>
              <h4 className={s.subTitle}>{consulting.subtitle[2]}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
