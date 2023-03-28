import s from './FireDefenderSystems.module.scss';
import { useEffect } from 'react';
import img from 'db/images';
import io from 'components/tools/io';
import LanguageContent from 'components/tools/LanguageContent';
import arrayMaping from 'components/tools/arrayMaping';

export default function FireDefenderSystems() {
  const fire = LanguageContent('fire');
  const { img8 } = img;

  useEffect(() => {
    io('contentItems', '-5%', 'contentAnimation');
  }, []);

  return (
    <div className={s.fireSection} id="DR-3">
      <h4 className={`${s.subTitle}`}>{fire.title}</h4>
      <div
        className={`${s.fireDefenderContent} ${s.animationItems}`}
        id="contentItems"
      >
        <img className={s.fireImg} src={img8} alt="fire defender systems" />
        <div className={s.firedeDenderText}>
          <p className={s.item}>{fire.details}</p>
          {arrayMaping(fire.items, s.sublist, s.item)}

          {/* <ul className={s.sublist}>
            {fire.items.map((item, i) => (
              <li className={s.item} key={i} id="contentItems">
                {item}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
