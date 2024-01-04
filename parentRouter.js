const express= require("express")
const parentRouter= express.Router()
const Children = require("../model/children")
const Parent = require ("../model/parents.js")
const { Await } = require("react-router-dom")
const jwt = require('jsonwebtoken')


// parentRouter.route("/")
  parentRouter.get("/",async (req, res, next) => {
    try {
      const email =Parent.findOne({email:req.body.email})

      if (email){
        res.status(403)
        console.log('16', email)
        return next(new Error("Email already taken!"))
      }
    } catch (error) {
      
    }
  })
  parentRouter.post("/register", (req, res, next) => {
    const newParent = new Parent(req.body)
    newParent.save(async (err, savedParent) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      console.log('saved Parent')
      // const pId = {parent: savedParent._id}
      // console.log(pId)
      const token= jwt.sign(savedParent.withoutPassword(),process.env.SECRET)
      const children = await Children.find({parent: savedParent._id })
      const parentWithChildren = {...savedParent.withoutPassword(), children,}
      return res.status(201).send({token, savedParent:parentWithChildren.withoutPassword()})
    })
  })


  parentRouter.put("/:parentId", (req, res, next) => {
    Parent.findOneAndUpdate(
      { _id: req.params.parentId },
      req.body,
      { new: true },
      (err, updatedParent) => {
        if (err) {

          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedParent)
      })
  })
  parentRouter.delete("/:parentId",(req, res, next) => {
    Parent.findOneAndDelete(
      { _id: req.params.parentId },
      (err, deletedParent) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(deletedParent)
      })
  })
parentRouter.get("/parentWithChildren",(req,res,next)=>{
    Parent.find(async (err,parent) =>{
      if (err){
          res.status(500)
          return next(err)

      }
      const parentWithChildren = await Promise.all(
        parent.map(async parent => {
          const children = await Children.find({parent:parent._id})

          return {...parent.toObject(),children:children}
        }))
        res.status(200).send(parentWithChildren)
    })
})
parentRouter.post('/login', async(req,res,next)=>{
  try{
    const user= await Parent.findOne ({ email: req.auth.email})
    console.log('Welcome back')
    console.log(parent)
    if(!email){
      res.status(403)
      console.log('80')
      return next (new Error("username or password incorrect"))
    }
  
  user.checkPassword(req.body.passowrd,(err,isMatch)=>{
    if(err){
      res.status(403)
      return next(new Error(" Email or passowrd inncorrect"))
    } const token= jwt.sign(User.withoutPassword(), process.env.SECRET)
    return res.status(200).send({token, User:userEvent.withoutPassword()})
  })
}
catch(err){
console.log(err)
return next (err)
}


})

module.exports = parentRouter

