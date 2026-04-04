//ejs --> file.ejs, <% %>, <%= %>

const{ error }= require("console")
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
// // usecase --> read json type data from frontend
app.use(express.urlencoded({ extended: true }));

// setup ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readdir('./tasks', (e, files) => {
        console.log(files)
        if(e) throw error;
          res.render("index", { data: files });
    });
    // render index.ejs
});

app.post("/create", (req, res) => {
    console.log(req.body);
    // res.send(req.body) 

  let Task_data =` Title : ${req.body.Title} \n Tasks: ${req.body.task} `;
    //craete a file

     fs.writeFile(
        `./tasks/${req.body.Title.split(' ').join(' ')}.txt`,
         Task_data,
          (err) => {
        if (err) throw err; // corrected error handling
        res.redirect("/");    
    });
});


//read files (open files) --> get

app.get("/file/:filename", (req, res) => {
    // console.log(req.params);
    // res.send(req.params);

    res.render("read");
})

//read file name and edit

//

app.listen(3000, () => {
    console.log("your server is running");
});