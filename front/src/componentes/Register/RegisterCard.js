import { CardStyle } from "./styled"
import TwitterIcon from '@mui/icons-material/Twitter';
import {useState} from 'react'
import { handlePostRegister } from "./postRegister";
import { Link, Navigate } from "react-router-dom";

export const RegisterCard = () => {

  const handleSubmit = () => {
    handlePostRegister(name, lname, email, pass, user, setSuccessLog)
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
  const [successLog, setSuccessLog] = useState(false)

  return(
    !successLog ?
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
          value={user}
          onChange = {e => setUser(e.target.value)}
          /><br/>
          <input
          className="inputSec"
          placeholder="Email"
          type="text"
          value={email}
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
        Already have an acount? <Link to='/login'>Log in to Twitter!</Link>
        </div>
      </div>
    </div>
    </CardStyle>
    : <Navigate to='/login'/>
  )
}