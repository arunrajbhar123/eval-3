import React, { useState,useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
const Login = () => {
  const {handleAuth} = useContext(AuthContext);


  const [data, setData] = useState([]);
  const handlelogin = (data) => {
    setData(obj);
    handleAuth(true)
    axios.post("https://reqres.in/api/login", obj).then((res) => {
      console.log(res.data.token);
    });
  };
  let obj = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const notUsed = () => {};
  return (
    <div>
      <h1>Login</h1>
      <input data-cy="login-email" value="eve.holt@reqres.in"  onChange={(e) => notUsed(e)}/>
      <br />
      <input
        data-cy="login-password"
        type="password"
        value="cityslicka"
        onChange={(e) => notUsed(e)}
      />
      <br />
      <button data-cy="login-submit" onClick={handlelogin}>
        Login
      </button>
      <br />
    </div>
  );
};

export default Login;
