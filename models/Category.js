const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); // Adjust the path as needed

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
);

module.exports = Category;
