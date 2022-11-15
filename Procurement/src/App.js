import React,{Component} from "react";
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import './components/css/style.css'
import './components/css/home.css';

import Procurementreg from "./components/Procurementreg.js";
import Procurelogin from "./components/Procurelogin.js";
import Procurepage from "./components/Procurepage";
import Supplierlogin from "./components/Supplierlogin";
import Supplierreg from "./components/Supplierreg";
import Listofregsup from "./components/Listofregsup.js";
import Supupdate from "./components/Supupdate.js"; 
import Pagenavigater from "./components/Pagenavigater";
import Supprofile from "./components/Supprofile";
import Report from "./components/Report";
import GetRequest from "./components/Getrequest";
import Nav from "./components/Nav.js";
import Supplierreport from "./components/Supplierreport";
import Examplesupplier from "./components/Examplesupplier";



 


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <Nav/>

        <Routes>

      
        <Route path="/Reg" element={<Procurementreg/>}/>  
        <Route path="/Log" element={<Procurelogin/>}/> 
        <Route path="/Procpg" element={<Procurepage/>}/>
        <Route path="/Suppllog" element={<Supplierlogin/>}/>  
        <Route path="/Supplreg" element={<Supplierreg/>}/>
        <Route path="/Listofregsupll" element={<Listofregsup/>}/>
        <Route path="/supreg/update/:id" element={<Supupdate/>}/>
        <Route path="/Navpg" element={<Pagenavigater/>}/>
        <Route path="/Supprof" element={<Supprofile/>}/>
        <Route path="/reporttt" element={<Report/>}/>
        <Route path="/Getreq" element={<GetRequest/>}/>
        <Route path="/Supreport" element={<Supplierreport/>}/>
        <Route path="/Examplesupp" element={<Examplesupplier/>}/>
       




        
        
      
        </Routes>


      </div>
      
      
      
      </BrowserRouter>
      
     
    )
  }
}