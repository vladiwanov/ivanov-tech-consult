import React, { useCallback } from 'react';
import { /* connect, */ useDispatch, useSelector } from 'react-redux';
import s from './LanguageButton.module.scss';
// import  action  from 'redux/language/language-actions';
import { action } from 'redux/languages';
import { getLanguageMemoised } from 'redux/languages';
const { languageAction } = action;
// memo - функционал = PureComponent - сравнивает поверхностно стейты на обновление с предыдущего рендера , если стейт не обновлялся - перерендера не будет

export default function LanguageButton() {
  const dispatch = useDispatch();
  const onSetCurrentLanguage = useCallback(
    e => dispatch(languageAction(e.target.outerText)),
    [dispatch],
  );

  const language = useSelector(getLanguageMemoised);

  return (
    <>
      <div className={s.lang}>
        <button
          type="button"
          className={s.selectButton}
          onClick={onSetCurrentLanguage}
          disabled={language === 'UA'}
        >
          UA
        </button>
        <button
          type="button"
          className={s.selectButton}
          // ❌  onClick={e => onSetCurrentLanguage(e.target.outerText)}
          onClick={onSetCurrentLanguage} // ❗️ вынесли анниимную функцию  отдельно , чтобы использовать useCallback()
          disabled={language === 'EN'}
        >
          EN
        </button>
      </div>
    </>
  );
}
