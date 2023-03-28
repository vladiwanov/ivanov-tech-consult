import s from './Team.module.scss';
import React from 'react';
import { useEffect } from 'react';
import io from 'components/tools/io';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';

export default function Team() {
  const team = LanguageContent('team');

  // const { img4 } = images;
  useEffect(() => {
    io('ourTeam', '-5%', 'contentAnimation');
  }, []);
  return (
    // <section className={`${s.section} ${s.team}`}>
    <section className={`section ${s.team}`} id="team">
      <div className="container">
        <h2 className="title">{team.title}</h2>
        <div className={`${s.teamContent} ${s.animationItems}`} id="ourTeam">
          <div className={s.text}>
            <p className={s.items}>{team.part1}</p>
            {arrayMaping(team.directionList, s.list, s.item)}
            {/* <ul className={s.list}>
              {team.directionList.map((item,i) => (
                <li key={i} className={s.item}>
                  {item}
                </li>
              ))}
            </ul> */}
            <p className={s.items}>{team.part2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
