const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    foodName: {type:String, required:true},
    foodCategory: {type:String, required:true},
    foodCode: {type:Number, required:true},
    price: {type:Number, required:true},
    qty: {type:Number, required:true},
    photoURL: {type:String, required:true}
}, { timestamps: true, versionKey: false })

const productModel = mongoose.model('products', productSchema)
module.exports=productModel