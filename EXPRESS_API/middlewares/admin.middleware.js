module.exports.authadmin = async (req, res, next) => {
    const user = req.user;//usermiddleware -- return req.user

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
}