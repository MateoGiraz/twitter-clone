import { Routes,Route } from "react-router-dom"
import { LoginCard } from "../componentes/Login/LoginCard"
import MainPage from "../componentes/MainPage"
import { RegisterCard } from "../componentes/Register/RegisterCard"

const AppRouter=()=>{

  return (
    <Routes>
            <Route path="/" element = {<MainPage/>}/>
            <Route path="/register" element = {<RegisterCard/>}/>
            <Route path="/login" element = {<LoginCard/>}/>
        </Routes>
  )
}
export default AppRouter