const express= require("express")

const childrenRouter=express.Router()
const Children = require ("../model/children.js")



// parentRouter.route("/")
  childrenRouter.get("/children",(req, res, next) => {
Children.find((err, children) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(children)
    })
  })
  childrenRouter.post("/children",(req, res, next) => {
    const newchildren = new Children(req.body)
    newchildren.save((err, savedChildren) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedChildren)
    })
  })


childrenRouter.put("/:childrenId", (req, res, next) => {
    Children.findOneAndUpdate(
      { _id: req.params.childrenId },
      req.body,
      { new: true },
      (err, updatedChildren) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedChildren)
      })
  })
  childrenRouter.delete("/:childrenId",(req, res, next) => {
    Children.findOneAndDelete(
      { _id: req.params.childrenId },
      (err, deleteChildren) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(deleteChildren)
      })
  })

  // children router ("/parent/child")

module.exports = childrenRouter