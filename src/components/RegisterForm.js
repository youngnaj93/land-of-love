import React, { useState, useContext} from 'react';
import { FormContext } from '../formContext';

import ChildrenForm from './childrenForm';


export default function RegisterForm() {
  // const { didSubmit, setDidSubmit, onSubmit } = useContext(FormContext)
const {newParent}= useContext(FormContext)


    const initInputs = {firstName: '',
    lastName: '', email:'', password:'', address:'',city:'', state:'',zipCode:0, startDate:'', numberChild:0 }
   
    const[inputs, setInputs]= useState(initInputs)
    console.log(inputs.firstName)
    
    const [createChild, setCreateChild] = useState(false)
    
   
    function next(e){
       e.preventDefault();
        newParent(inputs)
      //  setInputs(initInputs) // this doesnt work
      setCreateChild(!createChild)
    }
 
    function handlechange(e){
      const{name,value}=e.target
      setInputs(prevInputs=>({...prevInputs,[name]:value}))
      console.log(value)
   }
    return (
      
      
      <div className='forms'>
       {!createChild? 
         <form onSubmit={next} className='Register'>
         <input 
          type='text' 
          name='firstName'
          value={inputs.firstName}
          onChange={handlechange}
          placeholder="First Name"
          />
          <input 
          type='text' 
          name='lastName'
          value={inputs.lastName}
          onChange={handlechange}
          placeholder="Last Name"
          />
          <input 
          type='text' 
          name='email'
          value={inputs.email}
          onChange={handlechange}
          placeholder="Enter your email"
          />
         <input
         type="password"
         placeholder="Password"
         className="input"
         />
         <input 
          type='text' 
          name='address'
          value={inputs.address}
          onChange={handlechange}
          placeholder="Enter Address"
          />
          <input 
          type='text' 
          name='city'
          value={inputs.city}
          onChange={handlechange}
          placeholder="Enter your city"
          />
          <input 
          type='text' 
          name='state'
          value={inputs.state}
          onChange={handlechange}
          placeholder="Enter your State"
          />
          <input 
          type='number' 
          name='zipCode'
          value={inputs.zipCode}
          onChange={handlechange}
          placeholder="Enter your Zip Code"
          />
          <input 
          type='number'
          name='numberChild'
          value={inputs.numberChild}
          onChange={handlechange}
          placeholder=" How many children are registering?"
          />
          
         

       
          <label for="start" className='startDate'>Start date:</label>

        <input type="date" 
        id="start" 
        name="startDate"
      value={inputs.startDate}
      min="2023-07-24" 
      max="2024-12-31"
      onChange={handlechange}/>
        <button  className='next'>Next</button>
      </form>
      :
      <ChildrenForm />
      }  
      
   </div> )
// Line 80, render createChild componenet
    }
