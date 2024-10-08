const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); // Adjust the path if needed

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Tag',
  }
);

module.exports = Tag;
