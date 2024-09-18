import heroUa from "db/ua/hero-ua.js";
import businessUa from "db/ua/business-ua";
import directionsUa from "db/ua/directions-ua";
import benefitsUa from "db/ua/benefits-ua.js";
import informationsystemsUa from "db/ua/informationsystems-ua.js";
import teamUa from "db/ua/team-ua.js";
import submitUa from "db/ua/submit-ua.json";
import contactUsUa from "db/ua/contactUs-ua";
import securitySystemsUa from "db/ua/securitySystems-ua";
import fireUa from "db/ua/fire-ua";
import cctvUa from "db/ua/CCTV-ua";
import alternativeEnergyUa from "db/ua/alternativeEnrgy-ua";
import consultingUa from "db/ua/consulting-ua";
import gobackUa from "db/ua/goback-ua";
import navigationUA from "db/ua/navigation-ua";
import electricalUA from "db/ua/electrical-ua";


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
    cctv: cctvUa,
    alternativeEnergy: alternativeEnergyUa,
    consulting: consultingUa,
    goback: gobackUa,
    navigation: navigationUA,
    electrical: electricalUA,
};

export default ua