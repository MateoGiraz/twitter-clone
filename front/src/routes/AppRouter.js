import { Routes,Route } from "react-router-dom"
import { LoginCard } from "../componentes/Login/LoginCard"
import MainPage from "../componentes/MainPage"
import { RegisterCard } from "../componentes/Register/RegisterCard"
import useUser from "../context/userContext"
import NotLogedRoutes from "./components/NotLogedRoutes"

const AppRouter=()=>{
  const {currentUser} = useUser()
  return (
        <Routes>
          <Route element={<NotLogedRoutes user={currentUser}/>} >
            <Route path="/register" element = {<RegisterCard/>}/>
            <Route path="/login" element = {<LoginCard/>}/>
          </Route>
          
          <Route path="/" element = {<MainPage/>}/>
        </Routes>
  )
}
export default AppRouter