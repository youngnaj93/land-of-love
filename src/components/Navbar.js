import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'
export default function Navbar() {
    const [dropdown, setDropdown]= useState(false)
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
