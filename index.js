const express = require("express");
const path = require("path");

//const iss = require("./public/js/iss")

const app = express();
const port = process.env.PORT || "9999";

//define folders
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
//set public folder
app.use(express.static(path.join(__dirname, "public")));

//page routes
app.get("/",async(request,response)=>{
    
    response.render("index",{title:"Home"});
});
app.get("/iss",async(request,response)=>{
    //let isslocation = await iss.getIss();
    //console.log(isslocation);
    response.render("iss",{title: "ISS"});
});

app.get("/astronomyPic",async(request,response)=>{
    response.render("astronomyPic",{title:"Astronomy Picture"});
});

app.get("/planets",async(request,response)=>{
    response.render("planets",{title:"Planets"});
})

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});
