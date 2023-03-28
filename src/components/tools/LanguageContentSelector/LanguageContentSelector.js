import heroUa from 'db/ua/hero-ua.js';
import businessUa from 'db/ua/business-ua';
import directionsUa from 'db/ua/directions-ua';
import benefitsUa from 'db/ua/benefits-ua.js';
import informationsystemsUa from 'db/ua/informationsystems-ua.js';
import teamUa from 'db/ua/team-ua.js';
import submitUa from 'db/ua/submit-ua.json';
import contactUsUa from 'db/ua/contactUs-ua';
import securitySystemsUa from 'db/ua/securitySystems-ua';
import fireUa from 'db/ua/fire-ua';
import audiovisualUa from 'db/ua/audiovisual-ua';
import alternativeEnergyUa from 'db/ua/alternativeEnrgy-ua';
import consultingUa from 'db/ua/consulting-ua';
import projectUa from 'db/ua/project-ua';
import estimationUa from 'db/ua/estimation-ua';
import gobackUa from 'db/ua/goback-ua';
import navigationUA from 'db/ua/navigation-ua';
import electricalUA from 'db/ua/electrical-ua'

import heroEn from 'db/en/hero-en.js';
import businessEn from 'db/en/business-en';
import directionsEn from 'db/en/directions-en';
import benefitsEn from 'db/en/benefits-en.js';
import informationsystemsEn from 'db/en/informationsystems-en.js';
import teamEn from 'db/en/team-en.js';
import submitEn from 'db/en/submit-en.json';
import contactUsEn from 'db/en/contactUs-en';
import securitySystemsEn from 'db/en/securitySystems-en';
import fireEn from 'db/en/fire-en';
import audiovisualEn from 'db/en/audiovisual-en';
import alternativeEnergyEn from 'db/en/alternativeEnrgy-en';
import consultingEn from 'db/en/consulting-en';
import projectEn from 'db/en/project-en';
import estimationEn from 'db/en/estimation-en';
import gobackEn from 'db/en/goback-en';
import navigationEn from 'db/en/navigation-en';
import electricalEn from 'db/en/electrical-en'


const LangContentSelector = currentLanguage => {
  const ua = {
    hero: heroUa,
    business: businessUa,
    directions: directionsUa,
    benefits: benefitsUa,
    informationsystems: informationsystemsUa,
    team: teamUa,
    submit: submitUa,
    contactUs: contactUsUa,
    securitySystems: securitySystemsUa,
    fire: fireUa,
    audiovisual: audiovisualUa,
    alternativeEnergy: alternativeEnergyUa,
    consulting: consultingUa,
    project: projectUa,
    estimation: estimationUa,
    goback: gobackUa,
    navigation: navigationUA,
    electrical:electricalUA,
  };
  const en = {
    hero: heroEn,
    business: businessEn,
    directions: directionsEn,
    benefits: benefitsEn,
    informationsystems: informationsystemsEn,
    team: teamEn,
    submit: submitEn,
    contactUs: contactUsEn,
    securitySystems: securitySystemsEn,
    fire: fireEn,
    audiovisual: audiovisualEn,
    alternativeEnergy: alternativeEnergyEn,
    consulting: consultingEn,
    project: projectEn,
    estimation: estimationEn,
    goback: gobackEn,
    navigation: navigationEn,
    electrical:electricalEn,
  };
  switch (currentLanguage) {
    case 'UA':
      return ua;
    case 'EN':
      return en;
    default:
      return ua;
  }
};
export default LangContentSelector;
