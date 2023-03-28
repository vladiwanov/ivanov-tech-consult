import React from 'react';
import s from './GoBackButton.module.scss';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import LanguageContent from 'components/tools/LanguageContent';

export default function GoBackButton() {
  const { home } = routes;
  const goback = LanguageContent('goback');
  return (
    <div>
      <NavLink to={home}>
        <button className={s.goBackButton}>{goback.goback}</button>
      </NavLink>
    </div>
  );
}
