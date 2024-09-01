const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
let usedata=require('./route/dynamicroute')
let done=require('./route/staticroute')
app.use(usedata)
app.use(done)



app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
