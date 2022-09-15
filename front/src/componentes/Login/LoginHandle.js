import axios from 'axios'

export const LoginHandle = (username, pass, setErrMess, setLogged) => {

  axios.get(`http://localhost:2000/users`)
  .catch(e => setErrMess(true))
  .then(e => {
    const toCheckUser = e.data.find(elem => elem.username === username)
    if(!toCheckUser || toCheckUser.pass !== pass){
      setErrMess(true)
      setLogged(false)
    }
    else{
    setErrMess(false)
    setLogged(true)

    }
  })
}
