import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import useUser from "../../context/userContext";
import './LoginCard.css'


const initialValues = { username: "", pass: "" }

export const LoginCard = () => {
  const {login,currentUser} =useUser()
  const [formValues, setFormValues] = useState(initialValues);
  const [errMess, setErrMess] = useState()

  const handler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handlerSubmit = () => {
    login(formValues.username, formValues.pass)
    .then(()=>{
      setErrMess(false)
      setFormValues(initialValues)
      alert("correctly loged")
      return <Navigate to='/'/>
    })
    .catch(e=>{
      setErrMess(true)
      console.log(e)
    })
    
  }

  return (
    !currentUser ?
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
        {errMess && <div className='errMess'>Incorrect email or password</div>}
      </div>
    : <Navigate to='/' />
  );
};
