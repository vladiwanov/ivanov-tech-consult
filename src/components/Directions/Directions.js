import React from 'react';
import s from './Directions.module.scss';
import InformationSystems from './InformationSystems';
import SecuritySystems from './SecuritySystems';
import FireDefenderSystems from './FireDefenderSystems';
import AlternativeEnergy from './AlternativeEnergy';
import AudioVisualSystems from './AudioVisualSystems';
import ConsultingDirection from './ConsultingDirection';
import ProjectmakingDirecions from './ProjectmakingDirecions';
import TechnicalEstimation from './TechnicalEstimation';
// import LanguageContent from 'components/tools/LanguageContent';
import Electrical from 'components/Directions/Electrical';

export default function Directions() {
  // const directions = LanguageContent('directions');

  return (
    // <section className={`section ${s.business}`}>
    <div className="container">
      <ul className={`${s.list} ${s.businessList}`}>
        <li className={s.items}>
          <InformationSystems />
        </li>
        <li className={s.items}>
          <SecuritySystems />
        </li>
        <li className={s.items}>
          <FireDefenderSystems />
        </li>

        <li className={s.items}>
          <AudioVisualSystems />
        </li>
        <li className={s.items}>
          <Electrical />
        </li>
        <li className={s.items}>
          <AlternativeEnergy />
        </li>

        <li className={s.items}>
          <ConsultingDirection />
        </li>
        <li className={s.items}>
          <ProjectmakingDirecions />
        </li>
        <li className={s.items}>
          <TechnicalEstimation />
        </li>
      </ul>
    </div>
    // </section>
  );
}
