const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost', // Update if your database is hosted elsewhere
  dialect: 'postgres',
  logging: false, // Disable logging if you don't need it
});

module.exports = sequelize;
