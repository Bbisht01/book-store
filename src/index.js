const mongoose = require("mongoose")
const express = require("express")
const app = express()
const schemaModel= require("../models/book.model")
// const router = require("./controllers/book.controller")
const router = express.Router()
app.use(express.json())


mongoose.connect("mongodb+srv://bbisht01:Atd9J2mDgEDcd9g@cluster0.bjnad.mongodb.net/bookStore?retryWrites=true&w=majority",()=>{
    console.log("connected to database")
})

router.post("/",async(req,res)=>{
    try {
        const data= await schemaModel.create(req.body)
        return res.status(200).send(data)
    } catch (err) {
        res.json({message:err})
    }
})

router.get("/",async(req,res)=>{
    try {
        const data= await schemaModel.find().lean().exec()
        return res.status(200).send(data)
    } catch (err) {
        res.json({message:err})
    }
})

app.use("/books",router)

app.listen(3001,()=>{
    console.log("connected to post 3001")
})