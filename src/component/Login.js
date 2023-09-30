import React from "react";
import './Login.css';

function Login(props) {
  const saveUserData = event => {
    console.log('In Login');
    console.log(event);
    props.onShowNextSection(true);
    props.onShowLogin(false);
    props.onChangeName(event.target[0].value);
  }

  return (
    <form className="login" onSubmit={saveUserData}>
      <h1>LOGIN</h1>
      <input className="input-login" type="text" placeholder="Username" />
      <button className="choices" type="submit">Submit</button>
    </form>
  );
}

export default Login;