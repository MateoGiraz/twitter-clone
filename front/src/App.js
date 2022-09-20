import {BrowserRouter} from "react-router-dom"
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <div className="App">
      <userProvider>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </userProvider>  
    </div>
  ); 
}

export default App;
