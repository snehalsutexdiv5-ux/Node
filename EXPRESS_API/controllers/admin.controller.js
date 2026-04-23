const adminService = require("../services/admin.service");

//get all user  
module.exports.AllUser = async (req, res) => {
    try {
        const users = await adminService.allUser();

        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }

        return res.status(200).json({ message: "all Users fetched successfully", users });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

//delete single user
module.exports.DeleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteuser = await adminService.deleteUser(id);

    if (!deleteuser) {
      return res.status(404).json({ message: "User Not Found"});
    }

    return res.status(400).json({ message: "User Deleted Successfully"});

  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};    

//update user role

module.exports.UpdateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    const userId = req.params.id;

    if(req.user.role !== admin) {
        return res.status(401).json({message: "access denined !!"});
        }

     const user = await adminService.updateRole({ userId, role });
     return res.status(200).json({message: "update role user"}, user)

  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};    
