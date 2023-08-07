const mongoose = require("mongoose")
const Schema = mongoose.Schema

const parentSchema = new Schema({
    firstName: {
        type: String,
        
     },
    lastName:{ 
        type: String,
        
    },
    email:{ 
        type: String,
       
    },
    password:{
        type:String
    },
    numberChildren:{
        type:Number,
     
    },
    childrenAge:{
        type: Number,
      
    },
    birthDate:{
        type:String,
         
    },
    startDate:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipCode:{
        type:Number
    }


})

module.exports= mongoose.model("Parent", parentSchema)
