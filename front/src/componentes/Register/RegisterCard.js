import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { Link} from "react-router-dom";
import { validate } from "../../utils/validate";
import useUser from "../../context/userContext";
import './RegisterCard.css'

const initialValues = { user: "", name: "", lname: "", email: "", pass: "" };

export const RegisterCard = () => {
  
  const {register} = useUser()
  const [err, setErr] = useState({});
  const [formValues, setFormValues] = useState(initialValues);


  const handleSubmit = (e) => {
    e.preventDefault();
    const resValidate=validate(formValues)
    setErr(resValidate);
    if (Object.keys(resValidate).length === 0) {
      register(formValues)
      .then(()=>{
        alert('registered correctly')
        setFormValues(initialValues)
      })
      .catch(e=>setErr(e)) 
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErr(validate(formValues));
  };

  return  (
      <div className="mainDiv">
        <div className="formDiv">
          <TwitterIcon className="twitter-icon" />
          <div className="text">Join Twitter today.</div>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="First name"
              value={formValues.name}
              name="name"
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Last name"
              value={formValues.lname}
              name="lname"
              onChange={handleChange}
            />
            <br />
            <input
              className="inputSec"
              placeholder="Username"
              value={formValues.user}
              name="user"
              onChange={handleChange}
            />
            <br />
            <input
              className="inputSec"
              placeholder="Email"
              type="text"
              value={formValues.email}
              name="email"
              onChange={handleChange}
            />
            <input
              className="inputSec"
              placeholder="Password"
              type="password"
              value={formValues.pass}
              name="pass"
              onChange={handleChange}
            />
            <br />
            <input
              className="inputSubmit"
              type="button"
              value="Sing Up"
              onClick={handleSubmit}
            />
          </form>
          <div className="textsugestion">
            Already have an acount? <Link to="/login">Log in to Twitter!</Link>
          </div>
        </div>
        {Object.keys(err).length !== 0  && (
          <div className="errMess">{Object.values(err)[0]}</div>)}
      </div>
  )
};
