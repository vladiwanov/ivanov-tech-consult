import s from './AlternativeEnergy.module.scss';
import { useEffect } from 'react';
import io from 'components/tools/io';
import img from '../../../images/windgen.webp';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';

export default function AlternativeEnergy() {
  const alternativeEnergy = LanguageContent('alternativeEnergy');

  useEffect(() => {
    io('altenergy', '-5%', 'contentAnimation');
  }, []);
  return (
    <div className={s.alternativeSection} id="altenergy">
      <h4 className={s.subTitle}>{alternativeEnergy.title}</h4>
      <div
        className={`${s.alternativeContainer} ${s.animationItems}`}
        id="altenergy"
      >
          <div className={`item ${s.businessItem}`}>
              {arrayMaping(alternativeEnergy.items, s.sublist, s.item)}
          </div>
        <img className={s.img} src={img} alt="alternative Energy directions" />

      </div>
    </div>
  );
}
