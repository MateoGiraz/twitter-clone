import {Navigate,Outlet,useLocation} from 'react-router-dom';


const NotLogedRoutes = ({user,redirectPath='/'})=>{
    const location = useLocation()
    if(user){
        return <Navigate to={redirectPath}  state={{ from: location }} replace />
    }
    else{
        return <Outlet/>
    }
}
export default NotLogedRoutes