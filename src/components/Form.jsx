import React from "react";

function Form(props) {
  return (
    <form className='form'>
      <input type='text' placeholder='Username'></input>
      <input type='password' placeholder='Password'></input>
      {!props.isUserRegistered && (
        <input type='password' placeholder='Confirm Password'></input>
      )}
      <button type='submit'>
        {props.isUserRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
