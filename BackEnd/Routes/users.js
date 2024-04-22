const express=require('express')
const route=express()
const controllers=require("../Controllers/userController")



route.post('/add',controllers.addText)
route.get('/Delete',controllers.DeleteText)

module.exports=route