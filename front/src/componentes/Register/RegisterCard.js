import { CardStyle } from "./styled"
import TwitterIcon from '@mui/icons-material/Twitter';
import {useState} from 'react'
import { handlePostRegister } from "./postRegister";

export const RegisterCard = () => {

  const handleSubmit = () => {
    handlePostRegister(name, lname, email, pass, user)
    setName('')
    setLname('')
    setEmail('')
    setPass('')
    setUser('')

  }
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return(
    <CardStyle>
    <div className = "mainDiv">
      <div className="formDiv">
      <TwitterIcon className="twitter-icon"/>
      <div className="text">Join Twitter today.</div>
        <form>
          <input 
          className="input"
          placeholder="First name" 
          value={name}
          onChange = {e => setName(e.target.value)}
          />
          <input className="input" 
          placeholder="Last name" 
          value={lname}
          onChange = {e => setLname(e.target.value)}
          /><br/>
          <input 
          className="inputSec" 
          placeholder="Username" 
          value={email}
          onChange = {e => setUser(e.target.value)}
          /><br/>
          <input
          className="inputSec"
          placeholder="Email"
          type="text"
          value={user}
          onChange={e => setEmail(e.target.value)}
          />
          <input 
          className="inputSec" 
          placeholder="Password" 
          type="password"
          value={pass}
          onChange = {e => setPass(e.target.value)}
          /><br/>
          <input 
          className="inputSubmit" 
          type="button" 
          value="Sing Up" 
          onClick={handleSubmit}/>
        </form>
        <div className="textsugestion">
        Already have an acount? <a className="ref">Log in to Twitter!</a>
        </div>
      </div>
    </div>
    </CardStyle>
  )
}