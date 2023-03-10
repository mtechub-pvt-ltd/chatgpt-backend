const router = require("express").Router();
const controller= require("../../Services/userServices")

router.get("/get-all" ,controller.getAllusers)

// router.get("/get-admin-by-ID/:adminId" , controller.getSpecificadmin)
router.delete("/delete/:userId" , controller.deleteuser);
router.delete("/deleteAll" , controller.deleteuserAll);

router.post("/create" , controller.createuser);
router.post("/otpEmail" , controller.forgetPassworduser);

router.put("/update-user" , controller.updateuser);

router.put("/logout" , controller.logoutuser);
router.put("/login" , controller.loginuser);

// router.post("/forget-password" , controller.forgetPassworduser);

module.exports = router;