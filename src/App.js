import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/hotels' element={<List></List>}></Route>
    <Route path='/hotels/:id' element={<Hotel></Hotel>}></Route>
    
    </Routes>
    
    </BrowserRouter>
   
  )
}

export default App
