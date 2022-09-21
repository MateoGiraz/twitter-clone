import axios from "axios";
import { createContext, useContext ,useEffect,useState} from "react";

const UserContext = createContext()
const useUser=()=> useContext(UserContext)

export const UserProvider=({children})=>{
  const [currentUser,setCurrentUser]=useState()
  const [loading,setLoading]=useState(true)


  useEffect(()=>{
    const username = localStorage.getItem("username")
    const pass = localStorage.getItem("pass")
    login(username,pass)
    .finally(()=>setLoading(false))
  },[])

  const login = (username,pass)=>{
    return new Promise((res,rej)=>{
      axios.get(`http://localhost:2000/users`)
      .then(e => {
        const toCheckUser = e.data.find(elem => elem.username === username)
        if(!toCheckUser || toCheckUser.pass !== pass){
          res("Wrong username or password")
        }
        else {
          setCurrentUser(toCheckUser)
          res()
          localStorage.setItem("username",username)
          localStorage.setItem("pass",pass)
        }
      })
      .catch(e=>rej(e))
    })
  }
  const logout=()=>{
    setCurrentUser(null)  
    localStorage.clear()
  }
  const register=(data)=>{
    const {name, lname, email, pass, user} = data
    const newUser = {
      'name': name,
      'username': user,
      'photo': 'photo',
      'isAdmin': false,
      'email': email,
      'pass': pass,
      'lname': lname
    }
    return new Promise((res,rej)=>{
      axios.post('http://localhost:2000/users', newUser)
      .then(()=>res())
      .catch(e=>res(e))
    })
  }

  const data={
    currentUser,
    register,
    login,
    logout
  }

  return (
    <UserContext.Provider value={data}>
      {!loading && children}
    </UserContext.Provider>)

}

export default useUser
