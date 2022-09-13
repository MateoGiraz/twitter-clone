//grafo de seguimiento

import {BrowserRouter} from "react-router-dom"
import AppRouter from "./Router/AppRouter";

import {UserProvider} from './UserContext'

function App() {
  
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </UserProvider>
        
    </div>
  ); 
}

export default App;
