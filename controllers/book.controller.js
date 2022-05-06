const express=require("express")

const router = express.Router()
const schemaModel= require("../models/book.model")

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


module.exports= router