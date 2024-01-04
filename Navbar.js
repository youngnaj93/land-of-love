import React,{useContext, useState} from 'react'

import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'
import { FormContext } from '../formContext'

export default function Navbar() {
    const{setAdmin}= useContext(FormContext)
    const [dropdown, setDropdown]= useState(false)
     function adminClicked(){
        setAdmin(true)
        console.log('fire')
     }
 
  return (
    <header>
        {dropdown?
         <img src={Logo} onClick={()=>setDropdown(!dropdown)} width="50px" height="50px"/>
        :
        <nav>
            
            <img src={Logo} onClick={()=>setDropdown(!dropdown)} width="100px" height="100px"/>
            <ul>
                <Link to="/" className='nav-link'>Home</Link>
            <br/>
                <Link to="/aboutUs" className='nav-link'>About Us</Link>
            <br/>
                <Link to="/activities" className='nav-link'> Activities</Link>
            <br/>
                <Link to="/Register" className='nav-link'>Register</Link>
  <br/>
            <h3 onClick={adminClicked}> admin </h3>
</ul>
     
    </nav>
        }
       
        
        
        {/* <nav>
            <ul>
                
                    <a href='Home'> Home </a>
                   <br/>
                    <a href='Details'> Details</a>
                

            </ul>


        </nav> */}

    </header>
  )
}
