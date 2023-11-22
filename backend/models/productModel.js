const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product Name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"]
    },
    price:{
        type:String,
        required:[true,"Please Enter product price"],
        maxLength:[8,"Price cannot be more than 8 characters "]
    },
    rating:{
        type:String,
        default:0
    },
    images:[
        {
             public_id:{
                type:String,
                required:true
             },
             url:{
                type:String,
                required:true
             }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product category"]
    },
    Stock:{
        type:String,
        required:[true,"Please Enter  product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1   
     },
     numOfReview:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
    
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);