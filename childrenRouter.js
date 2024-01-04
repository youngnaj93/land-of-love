const express= require("express")
const parent = require("../model/parents")

const childrenRouter=express.Router()
const Children = require ("../model/children.js")



// parentRouter.route("/")
  childrenRouter.get("/",(req, res, next) => {
Children.find((err, children) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(children)
    })
  })
  childrenRouter.post("/:parentId",(req, res, next) => {
    console.log(req.body)
    req.body.parent=req.params.parentId
    const newchildren = new Children(req.body)

    newchildren.save(async (err, savedChildren) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      const childrenWithParent = await savedChildren.populate("parent")
      return res.status(201).send(childrenWithParent)
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