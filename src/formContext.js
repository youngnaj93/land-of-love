import React, { useState, createContext,useEffect } from "react"
import axios from "axios"



const FormContext = createContext()
 

// PROPS NEEDED FOR {PROPS.CHILDREN} BELOW
// useCONTEXT TRIGGERS LISTCONTEXT OF SUBMIT CLICK
function FormContextProvider(props) {
  const [userInput, setInput] = useState({})
  const [parent, setParent]=useState([])
  const [ child, setChild]=useState([])

  const onChange = (event) => {
    const { name, value } = event.target
    setInput(prevInput =>
      ({ ...prevInput, [name]: value })
    )
  }

  
    
  // const onSubmit = (userInput) => {
  //   console.log(`inside submit func`, userInput)
  //     axios.post("/", userInput)
  //       .then( res=>{ 
  //         // setParent(prevParent=>[...prevParent,res.data])
  //       })
  //       .catch(err=> console.error(err))
  // }

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
  function newChild(userInput){
    
    axios.post("/children", userInput)
    .then( res=>{ 
       setChild(prevChild=>[...prevChild,res.data])
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

 

// return(
//   <div>
//      <div className='parent-container'>
    
//      <RegisterForm
//       registerForm={RegisterForm}
       
//       post={addParent}
      
      
 
//      />
//           {parent.map(parent=>   <parent{...parent} addParent={addParent}deleteParent={deleteParent} editParent={editParent} key={parent._id}/>)}
//      </div> 
  

//   </div>
// )


  return (
    <FormContext.Provider value={{  onChange , editParent , deleteParent , newParent, getParent, getChild , newChild, deleteChild, editChild}}>
      {props.children}
    </FormContext.Provider>
  )
  }

export { FormContextProvider, FormContext }
  