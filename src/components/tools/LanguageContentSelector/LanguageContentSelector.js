// --------------------------------------------------------------------
import en from "./contentEn";
import ua from "./contentUa";
// --------------------------------------------------------------------

const LangContentSelector = (currentLanguage) => {
  switch (currentLanguage) {
    case "UA":
      return ua;
    case "EN":
      return en;
    default:
      return ua;
  }
};
export default LangContentSelector;
