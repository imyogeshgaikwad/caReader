const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const Listings = require("./models/listing.js");
const path = require("path");

const MONGO_URL ="mongodb://127.0.0.1:27017/temp"
main().then(()=>{
    console.log("DB connected");
}).catch(err =>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Hi I am root!")
});


app.get("/listings",async(req,res)=>{
   const allListings =  await Listings.find({});
    res.render("index.ejs",{allListings});
});

app.listen(8080,()=>{
     console.log("server is listening on port 8080")
});