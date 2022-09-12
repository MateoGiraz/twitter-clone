import axios from 'axios'

export const handlePostRegister = ({name, lname, email, pass, user}, setSuccessLog) => {
  
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
    console.log(e)
    setSuccessLog(true)
  })
  .catch(e => {
    console.log(e)
    setSuccessLog(false)
  })

}