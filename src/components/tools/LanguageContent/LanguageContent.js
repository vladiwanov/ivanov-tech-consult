import { useSelector } from 'react-redux';
import LanguageContentSelector from 'components/tools/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';

export default function LanguageContent(variable) {
  const language = useSelector(getLanguageMemoised);
  // const rezult = LanguageContentSelector(language);
  return LanguageContentSelector(language)[variable];
}
