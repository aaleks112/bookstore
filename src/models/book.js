const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");


const Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
     unique:true,
     allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  library: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

});

module.exports = Book;