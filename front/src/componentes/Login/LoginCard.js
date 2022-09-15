import { CardStyle } from "./styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { LoginHandle } from "./LoginHandle";
import { Navigate, Link } from "react-router-dom";
import useFalser from "../../utils/useFalser";

const initialValues = { username: "", pass: "" }

export const LoginCard = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errMess, setErrMess] = useState()
  const [logged, setLogged] = useState(false)
  useFalser(errMess, setErrMess)

  const handler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handlerSubmit = () => {
    LoginHandle(formValues.username, formValues.pass, setErrMess, setLogged)
    setFormValues(initialValues)
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
              name="username"
              value={formValues.username}
              onChange={handler}
            />
            <br/>
            <input
              className="inputSec"
              placeholder="Password"
              type="password"
              name="pass"
              value={formValues.pass}
              onChange={handler}
            />
            <br/>
            <input 
            className="inputSubmit" 
            type="button" 
            value="Log in" 
            onClick={handlerSubmit}
            />
          </form>
          <div className="textsugestion">
            Don't have an account yet? <Link to='/register'>Sing up to Twitter!</Link>
          </div>
        </div>
        {errMess ? <div className='errMess'>Incorrect email or password</div> : null}
      </div>
    </CardStyle>
    : <Navigate to='/' />
  );
};
