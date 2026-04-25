const productModel = require("../models/product.model");
const productService = require("../services/product.service");

// create product
module.exports.CreateProduct = async(req,res) => {
    try{
        const {name, description, stock, price, discount, 
            isNewProduct, sku, images, brand, category} = req.body;


            const isExist = await productModel.findOne({sku: sku})


    if (isExist) {
        return res.status(400).json({ message: "Procut Already Registerd}" });
    }

    const product = await productService.createProduct({
        name, description, stock, price, discount, isNewProduct, sku, images, brand, category
    });

    return res.status(200).json({ message: "Product Added SucsessFullt", product });



               } catch (error) {
        return res.status(400).json({ message: error.message});
    }
}

// get all product
module.exports.GetAllProduct = async (req,res)=>{
    try{
        const id = req.params.id

        const products = await productService.GetAllProduct(id);

        if(!product){
            return res.status(404).json({message: "product not found"})
        }

        return res.status(200).json({message: "fetch all product" , product})

    } catch( error) {
        return res.status(400).json({message: error.message})
    }
}

//get single product
module.exports.GetSingleProduct = async (req, res) => {
    try{
        const product = await productService.GetSingleProduct();

        if(!product){
             return res.status(404).json({message:"product not found"})
        }

       return res.status(200).json({message: "product fetch sucessfully",product})

    }catch(error){
        return res.status(400).json({message: error.message})

    }
}


//update product 
module.exports.UpdateProduct = async (req,res) => {
    try{

        const productId = req.params.id;
        const{
            name,
      description,
      stock,
      price,
      discount,
      isNewProduct,
      sku,
      images,
      brand,
      category,
        } = req.body
        const updateProduct = await productService.UpdateProduct({
           productId,
            name,
      description,
      stock,
      price,
      discount,
      isNewProduct,
      sku,
      images,
      brand,
      category,
        });

      return res.status(200).json({message : "product updated successfully",updateProduct})

    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}

// delete product
module.exports.DeleteProduct = async(req,res) => {
    try{
        const productId = req.params.id;

        const product = await productService.DeleteProduct
        (productId)

        if(!product){
            return res.status(404).json({message:"product not found"})
        }

        return res.status(200).json({message: "product deleted"})


    }catch (error){
        return res.status(400).json ({message: error.message})
    }
}