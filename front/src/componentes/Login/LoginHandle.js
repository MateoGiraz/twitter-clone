import axios from 'axios'

export const handleLogIn = (user, pass, setErrMess, setLogged) => {

  axios.get(`http://localhost:2000/users`)
  .catch(e => setErrMess(true))
  .then(e => {
    const usersArr = e.data;
    const toCheckUser = usersArr.find(elem => elem.username === user)
    if(!toCheckUser || toCheckUser.pass !== pass){
      setErrMess(true)
      setLogged(false)
      return
    }
    setErrMess(false)
    setLogged(true)
  })
}