const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const cookieParser=require("cookie-parser");

//Router
const userRoute = require("./routes/web/user.route");
const adminRouter=require("./routes/web/admin.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();
app.use(cookieParser());
//corse origin ==> allow only that website or port that mention into origin group.
// backend only response when localhost 3002 send requesr other than give cors origin error. 

app.use(cors({ origin: "http://localhost:3002", credentials: true }));

//to excess env values in file:
//Backend (node +express)-->process.env(env file variable name)
//Frontend (React) -->import.meta.env(env file variable name)
PORT = process.env.PORT;

//home route (temp route )--> in backend we don't create  a home route.
// after testing/development -->Remove Home Route
app.get("/", (req, res) => {
  res.send("Server's Home Page");
});
app.use("/user",userRoute); //1.localhost:3005/user/register
app.use("/admin",adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
