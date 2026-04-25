const express=require('express');
const router=express.Router();
const userMiddleware=require("../../middlewares/user.middleware");
const roleMiddleware=require("../../middlewares/roles.middleware");
const productContoller=require("../../controllers/product.controller");
//create product
router.post("/add",userMiddleware.authenticateUser,roleMiddleware.allowRoles("admin","manager"),
productContoller.CreateProduct);

//get all product
router.get("/all",productContoller.GetAllProduct);

//get single product
router.get("/:id",productContoller.GetSingleProduct);

//update product
router.put("/:id",userMiddleware.authenticateUser,
    roleMiddleware.allowRoles("admin","manager"),productContoller.UpdateProduct);

//delete product
router.delete("/:id",userMiddleware.authenticateUser,
    roleMiddleware.allowRoles("admin"),
    productContoller.DeleteProduct);

module.exports=router;