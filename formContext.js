import React, { useState, createContext,useEffect } from "react"
import axios from "axios"
import { set } from "mongoose"



export const FormContext = React.createContext()
 

// PROPS NEEDED FOR {PROPS.CHILDREN} BELOW
// useCONTEXT TRIGGERS LISTCONTEXT OF SUBMIT CLICK
export default function FormContextProvider(props) {
  const [userInput, setInput] = useState({})
  const [parent, setParent]=useState([])
  const [ child, setChild]=useState([])
  const [parentId, setParentId]=useState('')
  const [ admin, setAdmin]=useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setInput(prevInput =>
      ({ ...prevInput, [name]: value })
    )
  }

  


  function getParent(){
    axios.get("/parent")
      .then(res => setParent(res.data))
      .catch( err => console.log(err))
  }
  
useEffect(()=>{
  getParent()
},[])
  function newParent(userInput){
    
    axios.post("/parent", userInput)
    .then( res=>{ 
      console.log('newParent func', res.data)
       setParentId(res.data._id)
       setParent(prevParent=>[...prevParent,res.data])
    })
    .catch(err=> console.error(err))



  }
 
    

function deleteParent(parentId){
   axios.delete(`/${parentId}`)
   .then(res=>{
    setParent(prevParent=>prevParent.filter(Parent=>Parent._id !==parentId))
  
   })
   .catch(err=> console.error(err))
}
 function editParent(updates,parentId){
   console.log(updates,parentId)
    axios.put(`/${parentId}`,updates)
    .then(res =>{
      setParent(prevParent=>prevParent.map(Parent=>Parent._id !==parentId))
    })
    .catch(err=> console.error(err))
    getParent()
  }


  function getChild(){
    axios.get("/")
      .then(res => setChild(res.data))
      .catch( err => console.log(err))
  }
  
useEffect(()=>{
  getChild()
},[])
  function newChild(){
    
    console.log(child)
    axios.post(`/children/${parentId}`,child)
    .then( res=>{ 
       setChild(prevChild=>[...prevChild,res.data])
       console.log(setChild)
    })
    .catch(err=> console.error(err))



  }
 
    

function deleteChild(childId){
   axios.delete(`/${childId}`)
   .then(res=>{
    setChild(prevChild=>prevChild.filter(Child=>Child._id !==childId))
  
   })
   .catch(err=> console.error(err))
}
 function editChild(updates,childId){
   console.log(updates,childId)
    axios.put(`/${childId}`,updates)
    .then(res =>{
      setChild(prevChild=>prevChild.map(Child=>Child._id !==childId))
    })
    .catch(err=> console.error(err))
    getChild()
  }

 




  return (
    <FormContext.Provider value={{  onChange , editParent , deleteParent , newParent, getParent, getChild , newChild, deleteChild, editChild, parentId,admin,setAdmin,parent, userInput}}>
      {props.children}
    </FormContext.Provider>
  )
  }


  