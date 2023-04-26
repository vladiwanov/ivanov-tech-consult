import s from './Benefits.module.scss';
import images from '../../db/images';
import { useEffect } from 'react';
import io from '../../components/tools/io';
import LanguageContent from '../../components/tools/LanguageContent';

export default function Benefits() {
  const { img1, img2, img3 } = images;
  const benefits = LanguageContent('benefits');

  useEffect(() => {
    io('contentItems', '-5%', 'contentAnimation');
  }, []);

  return (
    <div id="benefits">
      <section className={`section ${s.benefits}`}>
        <div className="container">
          <h2 className={s.title}>{benefits.title}</h2>
          <ul className={`${s.pain} `}>
            <li className={`${s.item} ${s.items}`} id="contentItems">
              <img className={s.img} src={img1} alt="чертежи" />
              <p className={s.text}>{benefits.items[0]}</p>
            </li>
            <li className={`${s.item} ${s.items}`} id="contentItems">
              <img className={s.img} src={img2} alt="процесс" />
              <p className={s.text}>{benefits.items[1]}</p>
            </li>
            <li className={`${s.item} ${s.items}`} id="contentItems">
              <img className={s.img} src={img3} alt="инструменты" />
              <p className={s.text}>{benefits.items[2]}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
