import React,{useContext, useState} from "react";
import { FormContext } from "../formContext";
// import context to file , then one child is post clear data to add additional children, if needed
import axios from "axios";

export default function ChildrenForm(){
 const {newChild} = useContext(FormContext)
 
const initInputs = {  childAge: 0, birthDate: '', childFirstName: '',childLastName: ''  }
   
    const[inputs, setInputs]= useState(initInputs)
    console.log(inputs.childFirstName)
    
    function handlechange(e){
       const{name,value}=e.target
       setInputs(prevInputs=>({...prevInputs,[name]:value}))
       console.log(value)
    }
   
    function submit(e){
       e.preventDefault();
      console.log(inputs)
      newChild(inputs)
      //  handleSubmit()
      
      // this doesnt work
      alert (`'You have successfully added',${inputs.childFirstName}'to our system!'`)
    }
    return (
      
      
      <div className='child-forms'>
         
       <form onSubmit={submit} className='Register'>
             <header className='title2'>Registration </header>
          <input 
           type='text' 
           name='childFirstName'
           value={inputs.childFirstName}
           onChange={handlechange}
           placeholder=" Enter Child First Name"
           />
           <input 
           type='text' 
           name='childLastName'
           value={inputs.childLastName}
           onChange={handlechange}
           placeholder=" Enter Child Last Name"
           />
           
           
       
           <input 
           type='number' 
           name='childAge'
           value={inputs.childAge}
           onChange={handlechange}
           placeholder="Enter child's age"
           />
           
           <label for="birth" className='birthDate'>birth date:</label>

         <input type="date" 
         id="birth" 
         name="birthDate"
         value={inputs.birthDate}
          min="2012-01-01" 
          max="2023-06-31"
          onChange={handlechange}/>
          <button type="submit" className='submit'>Submit</button>
          </form>
    </div>
)}

  
           
