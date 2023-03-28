import s from './Navigation.module.scss';
import arrayMaping from 'components/tools/arrayMaping';
import LanguageContent from 'components/tools/LanguageContent';
import sprite from 'images/sprite.svg';
import { useState } from 'react';

export default function Navigation() {
  const navigation = LanguageContent('navigation');
  const directions = LanguageContent('directions');
  const [isActive, setIsActive] = useState(false);

  // console.log('NAVIGATION:::🆑:::', navigation);
  // const functionCombiner = () => {
  //   return;
  // };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={s.navigation}>
      {!isActive && (
        <button
          type="button"
          onClick={toggleMenu}
          className={s.menuButton}
          // aria-expanded="false"
          // aria-controls="header-nav"
          // data-menu-button
        >
          <svg className={s.socialIcon}>
            <use href={sprite + '#menu'} />
            {/* <use href={sprite + '#close-menu'} /> */}
          </svg>
        </button>
      )}

      {isActive && (
        <div className={s.menuBackdrop}>
          <button
            type="button"
            onClick={toggleMenu}
            className={s.menuCloseButton}
            // aria-expanded="false"
            // aria-controls="header-nav"
            // data-menu-button
          >
            <svg className={s.socialIcon}>
              {/* <use href={sprite + '#menu'} /> */}
              <use href={sprite + '#close-menu'} />
            </svg>
          </button>
          <h3 className={s.navigationListTitle}>{directions.title}</h3>
          {arrayMaping(
            navigation,
            s.navigationList,
            s.navigationItem,
            s.link,
            '',
            // true,
          )}
        </div>
      )}
    </section>
  );
}
