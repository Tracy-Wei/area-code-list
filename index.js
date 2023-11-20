import countryList from "./data.json";

// 准备数据结构
const codeToCountry = {};
const nameToCountry = {};
const shortToCountry = {};
const enToCountry = {};
const groupEnToCountry = {};
const groupCnToCountry = [];

countryList.forEach((obj) => {
  const country = {
    short: obj.short,
    name: obj.name,
    en: obj.en,
    code: obj.code,
    groupEn: obj.groupEn,
    groupCn: obj.groupCn,
  };

  codeToCountry[obj.code] = country;
  nameToCountry[obj.name] = country;
  shortToCountry[obj.short] = country;
  enToCountry[obj.en] = country;
  groupEnToCountry[obj.groupEn] = country;
  groupCnToCountry[obj.groupCn] = country;

  countries.push(country);
});

export default {
  getCountryByCode: (code) => codeToCountry[code],
  getCountryByName: (name) => nameToCountry[name],
  getCountries: () => countries,
  getCountriesByShortName: (short) => shortToCountry[short],
  getEnToCountry: (en) => enToCountry[en],
  getGroupEnToCountry: (groupEn) => groupEnToCountry[groupEn],
  getGroupCnToCountry: (groupCn) => groupCnToCountry[groupCn],
};
