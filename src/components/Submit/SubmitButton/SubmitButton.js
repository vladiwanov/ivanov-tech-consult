import React from "react";
import { useSelector } from "react-redux";
import { getLanguageMemoised } from "redux/languages/languages-selector";
import s from "./SubmitButton.module.scss";
import LangContentSelector from "../../tools/LanguageContentSelector";

// export default function SubmitButton({ onToggle, testToggle }) {
export default function SubmitButton(children) {
  const { onToggle } = children;
  const currentLanguage = useSelector(getLanguageMemoised);
  const { submit } = LangContentSelector(currentLanguage);
  const onHanldeClickButton = (e) => {
    e.preventDefault();
    onToggle();
  };

  // console.log("TEST_TOGGLE IS", testToggle);
  // console.log("CHIDREN+++++++++++++", children);

  return (
    <>
      <button
        type="button"
        onClick={onHanldeClickButton}
        className={` ${s.submitButton}`}
      >
        <p>{submit.text}</p>
      </button>
    </>
  );
}
