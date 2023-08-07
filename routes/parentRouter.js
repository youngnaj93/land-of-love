const express= require("express")
const parentRouter= express.Router()

const Parent = require ("../model/parents.js")



// parentRouter.route("/")
  parentRouter.get("/",(req, res, next) => {
    Parent.find((err, Parent) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(Parent)
    })
  })
  parentRouter.post("/",(req, res, next) => {
    const newParent = new Parent(req.body)
    newParent.save((err, savedParent) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedParent)
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

  // children router ("/parent/child")

module.exports = parentRouter

