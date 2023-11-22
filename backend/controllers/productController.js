const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");

//Create Product
exports.createProduct = async (req,res,next)=>{

    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

//Get All Product 

exports.getAllProducts = async (req,res)=>{

    const product = await Product .find();
    res.status(200).json({
        success:true,
        product
    })
}

// Update Product ---Admin 

exports.updateProduct = async (req,res,next)=>{
    
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,message:"Product not found"
        })

    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false

    });

    res.status(200).json({
        success:true,
        product
    })
}

// Get Product Details
exports.getProductDetails = async (req,res,next)=>{
    
   
    const product = await Product.findById(req.params.id);

    

    if(!product){
        return next( new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product
    })
}

//Delete Product

exports.deleteProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,message:"Product not found"
        })

    }
    await product.deleteOne();
    res.status(200).json({
        success:true,
        message:"Selected Product Deleted Successfully "
    })


}