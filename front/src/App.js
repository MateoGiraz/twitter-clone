import {BrowserRouter} from "react-router-dom"
import AppRouter from './routes/AppRouter';
import {UserProvider} from './context/userContext'

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
