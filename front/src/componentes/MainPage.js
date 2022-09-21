import { Home } from "./Home";
import { Sidebar } from "./Sidebar";
import { Widgets } from "./Widgets";
import GlobalStyles from "../styles/GlobalStyles";
import useUser from "../context/userContext";

function MainPage() {
  const {currentUser,logout}= useUser()
  return (
    <div className="MainPage">
        {currentUser && <p>User: {currentUser.username}</p>}
        <Sidebar logout={logout}/>
        <Home/>
        <Widgets/>
        <GlobalStyles/>
    </div>
  );
}

export default MainPage;