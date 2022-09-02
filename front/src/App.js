import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import MainPage from './componentes/MainPage';
import { LoginCard } from './componentes/Login/LoginCard';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<MainPage/>}/>
        <Route path="/login" element = {<LoginCard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
