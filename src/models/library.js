const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");


const Library = sequelize.define("Librarys", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  paranoid: true // Borrado lógico (data mencionada en Slack)
});

Library.hasMany(Book);
// Book.belongsTo(Library);

module.exports = Library;