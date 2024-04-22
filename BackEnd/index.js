const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const { urlencoded } = require('body-parser')
const bodyparser=require('body-parser')
const Routes=require('./Routes/users.js')
const pool=require('./db')


//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({ extended:true }))
app.use('/api',Routes);
const PORT=5000


app.listen(PORT,(err)=>{
    if(!err){
        console.log("server is running on port",`${PORT}`)
    }else{
        console.log("error occured",err)
    }
})