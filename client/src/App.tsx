import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EditEmployeeData from './pages/EditEmployeeData';
import Employees from './pages/Employees';
import Home from './pages/Home';
import SingleEmployee from './pages/SingleEmployee';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/employees' element={<Employees/>}></Route>
      <Route path='/employee/:id' element={<SingleEmployee/>}></Route>
      <Route path='/employee/edit/:id' element={<EditEmployeeData/>}></Route>
      <Route path='/create' element={<AddEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
