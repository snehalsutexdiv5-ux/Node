const express=require('express');
let router=express.Router();
let userMiddleware=require("../../middlewares/user.middleware");
let adminMiddleware=require("../../middlewares/admin.middleware");
let adminController=require ("../../controllers/admin.controller");
//get all user
//router--> service--> controller--> call controller into router
router.get("/all",
    userMiddleware.authenticateUser,
    adminMiddleware.authadmin,
    adminController.AllUser,
);

//delete single user
router.delete("/user/:id",
    userMiddleware.authenticateUser,
    adminMiddleware.authadmin,
    adminController.DeleteUser,);

//change role- create manager
router.put("/user/:id/role", 
     userMiddleware.authenticateUser,
    adminMiddleware.authadmin,
    adminController.UpdateUserRole,
);

module.exports=router;