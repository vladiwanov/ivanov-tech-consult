import s from './Business.module.scss';
import Directions from 'components/Directions';
import LanguageContent from 'components/tools/LanguageContent';

export default function Business() {
  const business = LanguageContent('business');
  const { title } = business;
  return (
    <div className={s.business}>
      <h2 className={s.title}>{title}</h2>
      <Directions />
    </div>
  );
}
