import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wall from "./components/Wall";
import Chart from "./components/Chart";
import About from "./components/About";

function App(){
 return(
     <Router>
      <Navbar/>
       <Routes>
           <Route path='/' element={<Wall/>}/>
           <Route path='/charts' element={<Chart/>}/>
           <Route path='/about' element={<About/>}/>
       </Routes>
     </Router>
 );
}

export default App;
