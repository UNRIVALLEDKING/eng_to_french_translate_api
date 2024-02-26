const { translateToFrenchService } = require('../services/translateService');
const TranslationError = require('../utils/customError');
exports.translateController = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text || text.trim().length === 0) {
      const err = new TranslationError(`Missing or empty text content`, 400);
      next(err);
    } else {
      const data = await translateToFrenchService(text);
      const translation = data.translation;
      res.status(200).json({ translation });
    }
  } catch (err) {
    next(err);
  }
};
