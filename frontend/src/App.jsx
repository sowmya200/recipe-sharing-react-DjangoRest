import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import CuisinePage from './pages/CuisinePage';
import CoursePage from './pages/CoursePage';
import RecipePage from './pages/RecipePage'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createrecipe" element={<CreateRecipe />} />
        <Route path="/cuisine/:name" element={<CuisinePage />} />
        <Route path="/course/:type" element={<CoursePage />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
     

      </Routes>
    </Router>
  );
}

export default App;
