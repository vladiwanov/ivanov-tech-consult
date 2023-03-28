import React from 'react';
import s from './Contacts.module.scss';
import { MdMail } from 'react-icons/md';
// import LanguageContent from 'components/tools/LanguageContent';

export default function Contacts() {
  // const contactUs = LanguageContent('contact');

  return (
    <section className={s.contactUs}>
      {/* <h3 className={s.contactsTitle}> {contactUs.title} </h3> */}
      <div className={s.contactsContainer}>
        <a className={s.email} href="mailto: vl.i@icloud.com">
          <MdMail className={s.icons} />
          {/* <p className={`${s.link} ${s.emailContent}`}>vl.i@icloud.com</p> */}
        </a>
      </div>
    </section>
  );
}
