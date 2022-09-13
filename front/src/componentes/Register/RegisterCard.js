import { CardStyle } from "./styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { HandlePostRegister } from "./postRegister";
import { Link, Navigate } from "react-router-dom";
import { validate } from "./validate";
import useFalser from "../../utils/useFalser";

const initialValues = { user: "", name: "", lname: "", email: "", pass: "" };

export const RegisterCard = () => {
  const [formErr, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [successLog, setSuccessLog] = useState(false);
  useFalser(isSubmit, setIsSubmit);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
    setFormErr(validate(formValues))
    if (Object.keys(formErr).length === 0) {
      HandlePostRegister(formValues, setSuccessLog)
      setFormValues(initialValues)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    setFormErr(validate(formValues))
  };

  return !successLog ? (
    <CardStyle>
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
        {Object.keys(formErr).length !== 0 && isSubmit ? (
          <div className="errMess">{Object.values(formErr)[0]}</div>
        ) : null}
      </div>
    </CardStyle>
  ) : (
    <Navigate to="/login" />
  );
};
