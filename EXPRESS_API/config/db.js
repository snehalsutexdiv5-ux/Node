const mongoose = require("mongoose");


function conectToDb() {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("database connected")
    })
    .catch((err) => {
        console.log(err);
    });
}
module.exports = conectToDb;
