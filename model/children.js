const mongoose = require("mongoose")
const Schema = mongoose.Schema

const childrenSchema = new Schema({
    firstName: {
        type: String,
        
     },
    lastName:{ 
        type: String,
        
    
     
    },
    childrenAge:{
        type: Number,
      
    },
    birthDate:{
        type:String,
         
    },
    


})

module.exports= mongoose.model("Children", childrenSchema)