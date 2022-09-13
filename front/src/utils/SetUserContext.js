import { useContext } from "react"
import { UserContext } from "../UserContext"

const SetUserContext = (user) => {
  const {contextUser, setContextUser} = useContext(UserContext)
  setContextUser(user)
}

export default SetUserContext