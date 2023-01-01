import {BrowserRouter} from "react-router-dom"
import AppRouter from './routes/AppRouter';
import {UserProvider} from './context/userContext'
import {TweetProvider} from './context/tweetContext'


function App() {

  return (
    <div className="App">
      <TweetProvider>
        <UserProvider>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </UserProvider>  
      </TweetProvider>
    </div>
  ); 
}

export default App;
