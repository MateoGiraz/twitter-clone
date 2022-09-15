//grafo de seguimiento

import { useState } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import MainPage from './componentes/MainPage';
import { RegisterCard } from './componentes/Register/RegisterCard';
import { LoginCard } from './componentes/Login/LoginCard'; 
import { UserContext } from './UserContext';

function App() {
  const [contextUser, setContextUser] = useState(null)
  
  return (
    <div className="App">
      <UserContext.Provider value={{contextUser, setContextUser}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<MainPage/>}/>
            <Route path="/register" element = {<RegisterCard/>}/>
            <Route path="/login" element = {<LoginCard/>}/>
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>  
    </div>
  ); 
}

export default App;
