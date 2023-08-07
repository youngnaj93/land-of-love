import React from 'react';
import AboutUs from '../src/components/aboutUs';

import RegisterForm from '../src/components/RegisterForm.js';
import {Routes,Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Main from '../src/components/main';
import Activities from '../src/components/activities'
import { FormContextProvider } from './formContext';

export default function App() {
  return (
    <>
  <Navbar/>
  <FormContextProvider>
 <Routes>
    
   {/* <Route> */}
   
     
        
          <Route exact path='/'element={<Main/>}/>
          <Route exact path='/activities' element={<Activities/>}/>
          <Route exact path='/aboutUs' element={<AboutUs/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
       
     
 {/* </Route>    */}
    
</Routes>    
</FormContextProvider>
</>
)}




