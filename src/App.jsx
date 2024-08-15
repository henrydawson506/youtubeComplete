import React, { useState }  from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Video from './Pages/Video/Video.jsx';
import Home from "./Pages/Home/Home.jsx";
const App = () => {
 const[sidebar,setSidebar]=useState(true);
 
  
  return (
    <div>
     <Navbar setSidebar={setSidebar}/>
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    
    </div>
  );
}

export default App;