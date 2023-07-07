const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");


const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = User;


/*
const User = sequelize.define("Users", {       //que uso para definir los modelos? uso LA INSTANCIA sequelize (en minuscula)
Sequelize utiliza el objeto DataTypes para definir los tipos de datos de los atributos de un modelo. Algunos de los tipos de datos comunes que se pueden utilizar son:
STRING: Representa una cadena de caracteres.
INTEGER: Representa un número entero.


*/