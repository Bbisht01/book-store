const mongoose= require("mongoose")
const express=require("express")

const schema = new mongoose.Schema({
        bookName:{type:String,required:true},
        Author:{type:String,required:true},
        URL:{type:String,required:true},
        rating:{type:Number,required:true}        
})

const SchemaModel = mongoose.model("books",schema)//Books is collection name

module.exports = SchemaModel