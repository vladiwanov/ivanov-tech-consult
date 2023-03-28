import s from './SecuritySystems.module.scss';
import React from 'react';
import img from 'db/images';
import { useEffect } from 'react';
import io from 'components/tools/io';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';

export default function SecuritySystems() {
  const securitySystems = LanguageContent('securitySystems');

  const { img6 } = img;
  useEffect(() => {
    io('secsystems', '-5%', 'contentAnimation');
  }, []);
  return (
    <div
      // className={s.businessItem}
      id="security"
      // style={{ backgroundColor: '#473926' }}
    >
      <h4 className={s.subTitle}>{securitySystems.title}</h4>
      <div
        className={`${s.cotentContainer} ${s.animationItems}`}
        id="secsystems"
      >
        <ul className={s.sublist}>
          <li className={s.item}>
            {securitySystems.items1}
            {arrayMaping(securitySystems.content, '', s.item)}
          </li>
          {securitySystems.items2.map((item, i) => (
            <li key={i} className={s.item}>
              {item}
            </li>
          ))}
        </ul>

        <img className={s.securityImg} src={img6} alt="secutity systems" />
      </div>
    </div>
  );
}
