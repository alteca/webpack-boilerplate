const normalizeEntries = require('../build-utils/normalizeEntries');

const entries = {
  app: 'app.js',
  pages: {
    admin: 'admin.js',
    user: 'user.js',
    stats: {
      stats: 'stats.js'
    }
  }
};

module.exports = normalizeEntries(entries);
