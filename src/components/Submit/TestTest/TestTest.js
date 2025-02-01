import React from "react";
import s from "../SubmitButton/SubmitButton.module.scss";

// export default function TestTest(children) {
export default function TestTest({ onToggle, testToggle }) {
  //   const { onToggle, testToggle } = children;

  console.log("OnToggle+++++++++++++", onToggle);
  console.log("EST_TOGGLE========", testToggle);
  //   console.log("CHIDREN ARE ?>>>>>>>>>", children);

  return <div className={s.submitButton}>TestTest</div>;
}
