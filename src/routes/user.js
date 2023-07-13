const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");


router.post("/", userIsAdminMDW,  userController.createUser);
router.get("/:userId", jwtValidMDW, userController.getUser);  //1)


module.exports = router;

/*
1) el nombre que coloquemos en el get debera ser el mismo que pase en la fx :userId
*/