const { Sequelize} = require('sequelize');    //1) 


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});


//4)
  const initializeDB = async ()=> {
  try {
    await sequelize.authenticate();  //4)
    console.log('Connection has been established successfully.');
    await sequelize.sync({force: false}); //5) 
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};


  module.exports = {sequelize, initializeDB}   //3)


  


/*
1) Le pedimos a la libreria sequelize la clase {Sequelize}, punto de entrada para utilizar el ORM
2) Creamos una instancia nueva utilizando la clase {Sequelize}. usaremos patron singleton (asegurarnos de que una clase tenga una única instancia p/usarla en toda la app)
3) Exporto para que el resto de la app lo pueda crear
4) Método para analizar la BD,  prueba la conex.intentado autenticarse. Prueba que todo funcione.
5) Método.sync va hacer que todos los MODELOS que esten definidos lo va a sincronizar con la BD.
Si nuestro modelo tiene algo distinto de lo que tiene la BD realizará un alter table - force:true realizará un alter table
*/