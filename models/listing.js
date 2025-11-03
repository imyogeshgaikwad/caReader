const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
        
    },description:{
        type: String,
         required: true
        
    },
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1761872936204-07e2bbe1990b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        set:(v) => v==="" ?"https://images.unsplash.com/photo-1761872936204-07e2bbe1990b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" : v

    },
    price:{
        type: Number,
         required: true
        
    },location:{
        type: String,
         required: true
        
    },country:{
        type: String,
         required: true
    }
        
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

