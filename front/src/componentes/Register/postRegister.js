import axios from 'axios'
import { validateUser } from "./validate";

export const handlePostRegister = (name, lname, email, pass, username, setSuccessLog) => {
  const user = {
    'name': name,
    'username': username,
    'photo': 'photo',
    'isAdmin': false,
    'email': email,
    'pass': pass,
    'lname': lname
  }

  if(!validateUser(user)) setSuccessLog(false)

  axios.post('http://localhost:2000/users', user)
  .then(e => {
    console.log(e)
    setSuccessLog(true)
  })
  .catch(e => {
    console.log(e)
    setSuccessLog(false)
  })

}