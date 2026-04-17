const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const db = require("./config/db")
const userRouter = require("./routes/web/user.route");


const app = express();

app.use(express.json())
 app.use(express.urlencoded({ extended: true }));
db();

//to excess env values in file:
//Backend (node + express) --> porcess.env.(env file variable name)
//forntend (react) --> import.meta.env.(env file variable name)

PORT = process.env.PORT;

// home route (temp route) --> in backend we do'not create a home Route. after Testing/
//  Development --> remove home route
app.get("/", (req, res)=>{
       res.send("server's Homepage");
});

app.use("/user", userRouter); // --> loacalhost:3000/user/register

app.listen(PORT, () => {
    console.log('server is Running on PORT');
});