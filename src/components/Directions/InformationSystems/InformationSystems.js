import s from './InformationSystems.module.scss';
import { useEffect } from 'react';
import io from 'components/tools/io';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';
// import SubmitButton from 'components/Submit/SubmitButton';

export default function InformationSystems() {
  const informationsystems = LanguageContent('informationsystems');

  useEffect(() => {
    io('lan', '-10%', 'contentAnimation');
  }, []);
  return (
    <div className={s.informSystems} id="inform">
      <h4 className={s.subTitle}>{informationsystems.title}</h4>
      <div className={`${s.contentIT} ${s.animationItems}`} id="lan">
        <div className={s.imgArray}>
          {/* <img
            className={s.images}
            src="https://introserv.eu/ru/assets/images/blog/blog300321.jpg"
            alt="servers"
          /> */}
          {/* <img
            className={s.images}
            src="https://sks-m.su/wp-content/uploads/2020/07/821f2ef3f65b3026b0226e38885e1853.jpg"
            alt="SCS"
          /> */}
        </div>
        <ul className={`${s.sublist} ${s.textContainer}`}>
          {/* <ul className={` ${s.textContainer}`}> */}
          <li className={s.textContent}>
            <p className={s.item}>{informationsystems.contentLAN[0]}</p>
            {arrayMaping(
              informationsystems.detailsDATA,
              '',
              '',
              // s.textContent,
            )}
          </li>
          <li className={s.textContent}>
            <p className={s.item}>{informationsystems.contentLAN[1]}</p>
            {arrayMaping(
              informationsystems.detailsSCS,
              '',
              '',
              // s.textContent,
            )}
          </li>
          <li className={s.textContent}>
            <p className={s.item}>{informationsystems.contentLAN[2]}</p>
            {arrayMaping(
              informationsystems.detailsLAN,
              '',
              '',
              // s.textContent,
            )}
          </li>
          <li className={s.textContent}>
            <p className={s.item}>{informationsystems.contentLAN[3]}</p>
          </li>
        </ul>
      </div>
      {/* <SubmitButton /> */}
    </div>
  );
}
