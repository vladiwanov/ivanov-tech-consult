import s from './Footer.module.scss';
import { useEffect } from 'react';
import Contacts from './Contacts';
import Communities from './Communities';
import io from 'components/tools/io';

export default function Footer() {
  useEffect(() => {
    io('contacts', '5%');
  }, []);

  return (
    <footer className={s.footer}>
      <div className={s.contacts} id="contacts">
        <Contacts />
        <Communities />
      </div>
    </footer>
  );
}
