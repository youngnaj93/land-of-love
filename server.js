const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require('dotenv').config() 
uri = process.env.URI 

// const cors= require("cors")

app.use(express.json())
app.use(morgan("dev"))
// app.use(cors())

mongoose.connect(uri, console.log("Connected to database"))


app.use("/parent", require("./routes/parentRouter"))
app.use("/children", require("./routes/childrenRouter"))
app.use((err, req, res, next) => {
    res.send(err.message)
  })
  
  app.listen(2500, () => {
    console.log("Port 2500 connected")
  })