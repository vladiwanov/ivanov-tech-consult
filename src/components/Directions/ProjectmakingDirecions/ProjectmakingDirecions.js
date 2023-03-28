import s from './ProjectmakingDirecions.module.scss';
import React from 'react';
import { useEffect } from 'react';
import io from 'components/tools/io';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';

export default function ProjectmakingDirecions() {
  const project = LanguageContent('project');
  useEffect(() => {
    io('project', '-5%', 'contentAnimation');
  }, []);
  return (
    <div
      className={`${s.businessItem}`}
      style={{ backgroundColor: 'rgba(60, 20, 60, 0.4)' }}
    >
      <strong className={s.subTitle}>{project.title}</strong>
      <div className={s.animationItems} id="project">
        {arrayMaping(project.items, s.sublist, s.item)}
      </div>
    </div>
  );
}
