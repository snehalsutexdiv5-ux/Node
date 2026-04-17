// const userModel = require("../Models/user.model");
// const jwt = require("jsonwebtoken");

// module.exports.authUser = async (req, res, next) =>{
//     const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

//      if (!token) {
//          return res.status(400).json({ message: "Token Expire Re-SignIn"});
//      }

//     try {
//         const Decoded = jwt.verify(token, process.env.JWT_SECRET);
//         let user = await userModel.findOne({ _id: Decoded._id });

//         if (!user) {
//             return res.status(401).json({ message: "Unathorized"});
//         }
//         req.user=user;
//         return next();
//     } catch (error) {
//       return res.status(500).json({ error });  
//     }
// }

const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
    const token =
        req.cookies?.token ||
        req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token Missing, Please Login" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }

        req.user = user;
        next();

    } catch (error) {
        // 👇 THIS is the important fix
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token Expired, Please Login Again" });
        }

        return res.status(401).json({ message: "Invalid Token" });
    }
};