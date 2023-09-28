import React from "react";
import './Login.css';


function Login(props) {

  const saveUserData = event => {
    console.log(event);
    props.onShowNextSection(true);
    props.onShowLogin(false);
  }

  return (
    <form className="login" onSubmit={saveUserData}>
      <h1>LOGIN</h1>
      <input className="input-login" type="email" placeholder="Username" />
      <input className="input-login" type="password" placeholder="Password" />
      <button className="choices" type="submit">Submit</button>
    </form>
  );
}

export default Login;