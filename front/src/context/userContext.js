import axios from "axios";
import { createContext, useContext ,useState} from "react";

const UserContext = createContext()

const useUser=()=> useContext(UserContext)

export const userProvider=({children})=>{
  const [currentUser,setCurrentUser]=useState()
  const [loading,setLoading]=useState(true)
 

  const login = (username,password)=>{
    return new Promise((res,rej)=>{
      axios.get(`http://localhost:2000/users`)
      .then(e => {
        const toCheckUser = e.data.find(elem => elem.username === username)
        if(!toCheckUser || toCheckUser.pass !== pass){
          res("Wrong username or password")
        }
        else {
          currentUser=toCheckUser;
          res()
        }
      })
      .catch(e=>res(e))
    })
  }
  const logout=()=>{
    
    
  }



  const data={
    login,
    logout
  }

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>)

}

export default useUser
