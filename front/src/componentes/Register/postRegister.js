import axios from 'axios'
import { UserContext } from '../../UserContext';
import { useContext } from 'react';

export const HandlePostRegister = ({name, lname, email, pass, user}, setSuccessLog) => {

  const newUser = {
    'name': name,
    'username': user,
    'photo': 'photo',
    'isAdmin': false,
    'email': email,
    'pass': pass,
    'lname': lname
  }
  
  axios.post('http://localhost:2000/users', newUser)
  .then(e => {
    setSuccessLog(true)
  })
  .catch(e => {
    console.log(e)
    setSuccessLog(false)
  })

}