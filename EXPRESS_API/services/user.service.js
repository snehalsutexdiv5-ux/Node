const userModel = require("../models/user.model");

//third validation --> check all filed are not blank

module.exports.createuser = async ({ username, email, password, role }) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required");
  }
  const user=await userModel.create({username, email,password,role});
  return user;
};
//updtae user
module.exports.updateUser=async ({userId,email,username})=>{
  if(!username || !email){
    throw new Error("all fields are required !!");
  }

  const updateUser=await userModel.findOneAndUpdate(
    {_id:userId},
    {username,email},
    {new:true },
  );
if(!updateUser){
  throw new Error("User not found");
}
return updateUser;

};

