const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost/social_network_api';

connect(connectionString);

module.exports = connection;
