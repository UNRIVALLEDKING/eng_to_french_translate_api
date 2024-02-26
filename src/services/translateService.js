const { translate } = require('bing-translate-api');

exports.translateToFrenchService = async (text) => {
  const result = await translate(text, 'en', 'fr');
  return result;
};
