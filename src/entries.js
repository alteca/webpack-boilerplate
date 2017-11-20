const normalizeEntries = require('../build-utils/normalizeEntries');

const entries = {
  app: 'app.js',
  pages: {
    user: 'user.js',
    admin: {
      index: 'admin.js',
      stats: 'stats.js'
    }
  }
};

module.exports = normalizeEntries(entries);
