import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home/Home';
import ToDo from './pages/ToDo/ToDo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/todo' element={<ToDo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
