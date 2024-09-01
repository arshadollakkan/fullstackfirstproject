const express = require('express');
const router=express.Router()
let data1=[{name:"arshad",id:1},
    {name:"jalal",id:2},
    {name:"akbar",id:3},
    {name:"ajnas",id:4},
]
router.post('/ella',(req,res)=>{
   res.json(data1)
})
router.post('ella/:id',(req,res)=>{
    let id=req.params.id
    let data=data1.filter(item=>item.id==id)
    res.json(data)
})
module.exports=router;