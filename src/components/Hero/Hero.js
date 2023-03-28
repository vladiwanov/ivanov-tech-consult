import s from './Hero.module.scss';
import React from 'react';
import LanguageButton from 'components/LanguageButton/LanguageButton';
import LanguageContent from 'components/tools/LanguageContent';
import AppBar from 'components/AppBar';

export default function Hero() {
  const hero = LanguageContent('hero');
  return (
    <div>
      <section className="section hero">
        <AppBar />
        <div className={s.heroTextContainer}>
          <b>{hero.subtitle}</b>
          <h1>{hero.title}</h1>
          <b>{hero.submit}</b>
        </div>
      </section>
    </div>
  );
}
