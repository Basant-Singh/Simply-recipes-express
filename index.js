const express = require("express");
const path = require("path");
const data = require(path.join(__dirname,"/public/data.json"));
const app = express();
app.set("view engine", "ejs")
app.use  (express.static(path.join(__dirname,"/public")));

// app.use((req, res)=>{
//     res.render("notfound",{p: "ERROR", data, num:3});
// })

app.get("/:p",(req,res)=>{
    const {p} = req.params;
        res.render(`${p}`,{p,data, num: 3},(e,s)=>{
            if(e === null){
                res.send(s);
            }
            else{
                res.render("notfound",{p: "ERROR", data, num:3});
            }
        });    
})


app.get("/",(req,res)=>{
    const p = "Simply Recipes";
    res.render("main",{p,data, num: 4});
})
// app.get("/about",(req,res)=>{
//     const title = req.path.slice(1);
//     res.render("about",{title,data, num: 3});
// })
// app.get("/tags",(req,res)=>{
//     const title = req.path.slice(1);
//     res.render("tags",{title,data, num: 4});
// })
// app.get("/tag-template",(req,res)=>{
//     const title = req.path.slice(1);
//     res.render("tagTemp",{title,data, num: 4});
// })
// app.get("/recipes",(req,res)=>{
//     const title = req.path.slice(1);
//     res.render("recipes",{title,data, num: 4});
// })
// app.get("/contact",(req,res)=>{
//     const title = req.path.slice(1);
//     res.render("contact",{title,data, num: 3});
// })
// app.get("/single-recipe",(req,res)=>{
//     const title = req.path.slice(1);
//     res.render("singleRecipe",{title,data, num: 4});
// })





app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})