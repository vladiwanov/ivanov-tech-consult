import s from './ConsultingDirection.module.scss';
import { useEffect } from 'react';
import io from 'components/tools/io';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';

export default function ConsultingDirection() {
  const consulting = LanguageContent('consulting');
  useEffect(() => {
    io('consulting', '-5%', 'contentAnimation');
  }, []);
  return (
    <div className={`item ${s.businessItem}`} id="consult">
      <strong className={s.subTitle}>{consulting.title}</strong>
      <div className={s.animationItems} id="consulting">
        {arrayMaping(consulting.items, s.sublist, s.item)}
      </div>
    </div>
  );
}
