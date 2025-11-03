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
        default:"https://images.unsplash.com/photo-1703098669280-b2e154c234b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TUclMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
        set:(v) => v==="" ?"https://images.unsplash.com/photo-1703098669280-b2e154c234b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TUclMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000" : v

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

