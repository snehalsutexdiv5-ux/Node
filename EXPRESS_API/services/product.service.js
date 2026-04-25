const productModel = require("../models/product.model");

module.exports.CreateProduct = async ({
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
}) => {
  if (
    !name ||
    !description ||
    !stock ||
    !price ||
    !discount ||
    !sku ||
    !images ||
    !brand ||
    !category
  ) {
    throw new Error("All fields are required !!!");
  }

  let product = await productModel.create({
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

  return product;
};
//get all poduct
module.exports.GetAllProduct = async () => {
  return await productModel.find();
};


// get single product 
module.exports.GetSingleProduct = async(id) =>{
    const product = await productModel.findOne({_id: id});

    return product;
};

//updtae product
module.exports.UpdateProduct = async ({
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
}) => {
  const updateProduct = await productModel.fiindOneAndUpdtae(
    { _id: productId },
    {
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
    },
    {new:true},
  );

  if(!updateProduct){
    throw new Error("product not found");

  }
  return updateProduct;
};


//delete product
module.exports.DeleteProduct = async (id) =>{
    return await productModel.fiindOneAndDelete({_id: id})
}