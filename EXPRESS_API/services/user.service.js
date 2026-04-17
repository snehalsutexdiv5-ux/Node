// check kare ke database ma filde ma ekey filde khali nathi ne

const userModel = require("../Models/user.model");


// thrid validation --> check all field are not blank

module.exports.createUser = async ({username, email, password})=>{
    if(!username || !email || !password){
        throw new Error ("All Filed Are Required");
    }
    const user = await userModel.create({username, email, password});
    
    return user;
};

// next create a controller for register 


// update data
module.exports.updateUser = async({userId, username, email}) =>{
  const updatedUser = await userModel.findOneAndUpdate(
    {_id: userId},
    { username, email},
    {new: true},
  )

  if(!updatedUser){
    throw new Error ("user not found")
  }
  return updatedUser;
};