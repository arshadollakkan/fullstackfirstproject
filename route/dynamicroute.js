const express = require('express');
const router=express.Router()

let array=[]
router.post('/user',(req,res)=>{
    let data=req.body
    array.push(data)
    res.json("data added succefuly")// ee responce ann then kayinnulla consolili varunnath
 })
 router.get('/adduser',(req,res)=>{
     res.json(array)//ee responce consolil kanam
 })
 module.exports=router;