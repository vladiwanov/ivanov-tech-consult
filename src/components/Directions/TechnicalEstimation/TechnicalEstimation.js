import s from './TechnicalEstimation.module.scss';
import { useEffect } from 'react';
import io from 'components/tools/io';
import LanguageContent from 'components/tools/LanguageContent';

export default function TechnicalEstimation() {
  const estimation = LanguageContent('estimation');
  useEffect(() => {
    io('estim', '-5%', 'contentAnimation');
  }, []);
  return (
    <div
      className={`${s.businessItem} ${s.animationItems}`}
      style={{ backgroundColor: 'rgba(30, 40, 30, 0.2)' }}
      id="estim"
    >
      <strong className={`${s.subTitle}  ${s.contentTitle}`}>
        {estimation.title}
      </strong>
    </div>
  );
}
