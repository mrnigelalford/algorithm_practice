const Prep = require('./prep');

function fuzz(buf) {
  try {
    Prep.Prep.arrayManip(0, buf);
  } catch (e) {
    throw e;
  }
}

module.exports = { fuzz };