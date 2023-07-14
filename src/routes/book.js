const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");



/*
ruta: /api/book
*/


router.post("/", jwtValidMDW, bookController.createBook);                   //AUTH

router.get("/:bookId", bookController.getBook); 

router.get("/books/all",bookController.getAllbooks); 

router.put("/:bookId", jwtValidMDW, bookController.updateBook);           //AUTH

router.put("/delete/:bookId", jwtValidMDW, bookController.deleteBook);    //AUTH

router.post("/book",jwtValidMDW, bookController.createBook);        //AUTH

module.exports = router; 