import { CardStyle } from "./styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { handleLogIn } from "./LoginHandle";
import { useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

export const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errMess, setErrMess] = useState()
  const [logged, setLogged] = useState(false)

  const handler = () => {
    handleLogIn(email, pass, setErrMess, setLogged)
    setEmail('')
    setPass('')
  }

  useEffect(() => { 
    if(errMess){
      setTimeout(() => {
        setErrMess(false)
      }, 3000)
    }  
  })
 
  return (
    !logged ?
    <CardStyle>
      <div className="mainDiv">
        <div className="formDiv">
          <TwitterIcon className="twitter-icon" />
          <div className="text">Log in to Twitter.</div>
          <form>
            <input
              className="inputSec"
              placeholder="Email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <input
              className="inputSec"
              placeholder="Password"
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
            <br/>
            <input 
            className="inputSubmit" 
            type="button" 
            value="Log in" 
            onClick={handler}
            />
          </form>
          <div className="textsugestion">
            Don't have an account yet? <Link to='/register'>Sing up to Twitter!</Link>
          </div>
        </div>
        {errMess ? <div className='errMess'>Incorrect email or password</div> : null}
      </div>
    </CardStyle>
    : <Navigate to='/'/>
  );
};
