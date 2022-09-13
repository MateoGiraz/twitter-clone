import axios from "axios";
import useUser from "../../UserContext";

const endpoint = `http://localhost:2000/users`

export const LoginHandle = (username, pass, setErrMess, setLogged) => {
  const {setUser} = useUser()

  axios
    .get(endpoint)
    .catch((e) => setErrMess(true))
    .then((e) => {
      const toCheckUser = e.data.find((elem) => elem.username === username)
      if (!toCheckUser || toCheckUser.pass !== pass) {
        setErrMess(true)
        setLogged(false)
        return
      }
      setErrMess(false)
      setLogged(true)
      setUser(toCheckUser)
    });

};
