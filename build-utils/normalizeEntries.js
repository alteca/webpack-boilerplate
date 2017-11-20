const path = require('path');

const normalizeEntries = (entries, base = '') => {
  let res = {};

  for (const entry in entries) {
    if (entries.hasOwnProperty(entry)) {
      const val = entries[entry];
      const key = base !== '' ? `${base}/${entry}` : entry;

      if (typeof val === 'object') {
        res = Object.assign({}, res, normalizeEntries(val, key));
      } else {
        res[key] = path.resolve(__dirname, '../', 'src', base, val);
      }
    }
  }

  return res;
};

module.exports = normalizeEntries;
