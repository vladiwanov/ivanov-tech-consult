import React from 'react';
import s from './Communities.module.scss';
import sprite from '../../../images/sprite.svg';

export default function Communities() {
  return (
    <section className={s.social}>
      <ul className={` list ${s.socialnetworks}`}>
        <li>
          <a
            className={s.email}
            href="https://www.facebook.com/kakmyhotim"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-facebook'} />
              {/* <use href="./images/sprite.svg#icon-facebook" /> */}
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/vladiwanov"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-twitter'} />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={s.email}
            href="https://www.linkedin.com/in/vladimir-ivanow-64426617/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-linkedin'} />;
            </svg>
          </a>
        </li>
        <li>
          <a
            className={s.email}
            href="https://www.instagram.com/_volodymyr_ivanov_/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-instagram'} />;
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}
