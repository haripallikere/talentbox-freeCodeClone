import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
