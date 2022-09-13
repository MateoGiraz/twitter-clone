import { createContext, useState ,useContext} from "react";


export const UserContext = createContext()

const useUser=()=>{
  return useContext(UserContext)
}
export default useUser


export const UserProvider=({children})=>{
  const [user,setUser]=useState()

  const values={
    user: user,
    setUser:setUser
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

