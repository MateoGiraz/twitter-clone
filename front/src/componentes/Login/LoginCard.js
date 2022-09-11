import { CardStyle } from "./styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { handleLogIn } from "./LoginHandle";

export const LoginCard = (props) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handler = () => {
    handleLogIn(user, pass)
    setUser('')
    setPass('')

  }

  return (
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
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <br/>
            <input
              className="inputSec"
              placeholder="Password"
              type="text"
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
            Don't have an account yet? <a href="">Sing up to Twitter!</a>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};
