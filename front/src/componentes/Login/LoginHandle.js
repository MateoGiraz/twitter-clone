import axios from 'axios'

export const handleLogIn = (user, pass) => {

  axios.get(`http://localhost:2000/users`)
  .catch(e => {console.log(e)})
  .then(e => {
    const usersArr = e.data;
    const toCheckUser = usersArr.find(elem => elem.username == user)
    if(!toCheckUser) return
    if(toCheckUser.pass == pass) console.log('ok')
    else console.log('not ok')
  })
}