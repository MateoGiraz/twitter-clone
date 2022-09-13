import { CardStyle } from "./styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { LoginHandle } from "./LoginHandle";
import { Navigate, Link } from "react-router-dom";
import useFalser from "../../utils/useFalser";

export const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [errMess, setErrMess] = useState()
  const [logged, setLogged] = useState(false)
  useFalser(errMess, setErrMess)
  
  const handler = () => {
    LoginHandle(username, pass, setErrMess, setLogged)
    setUsername('')
    setPass('')
  }

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
              placeholder="User"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
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
