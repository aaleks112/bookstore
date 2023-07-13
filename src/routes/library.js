const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");
const { jwtValidMDW} = require("../middleware/auth-mdw");

/*
ruta: /api/library
*/



router.post("/",jwtValidMDW, libraryController.createLibrary);                   //AUTH

router.get("/:libraryId", libraryController.getLibrary); 

router.get("/libraries/all",libraryController.getAllLibraries); 

router.put("/:libraryId", jwtValidMDW, libraryController.updateLibrary);           //AUTH

router.put("/delete/:libraryId", libraryController.deleteLibrary);    //AUTH

router.post("/:libraryId/book", libraryController.createBook);        //AUTH

module.exports = router; 
