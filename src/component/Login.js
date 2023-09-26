import React from "react";
import './Login.css';


function Login() {
  return (
    <form className="login">
      <h1>LOGIN</h1>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;