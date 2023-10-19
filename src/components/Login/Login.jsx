import React, { useState } from 'react'
import { useContext } from "react";
import { context } from '../../context/context'

export const Login = ({ setVisibleOther, setVisibleSelf }) => {
  const { setUser, setVisibleLogIn } = useContext(context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    setVisibleSelf(false);
    setVisibleOther(true);
  }

  const login = async (e) => {
    e.preventDefault();
    console.log('Trying to log in');

    try {
      const response = await fetch('https://apimas.onrender.com/userValidation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      
      const data = await response.json();
      
      if (data.success) { // Assuming your API returns { success: true } when login is successful
        setUser(data.user.email); // Assuming your API returns the user's data
        setVisibleSelf(false);
      } else {
        // Handle unsuccessful login, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("There was an error logging in:", error);
      // Handle error, e.g., show an error message to the user
    }
  }

  return (
    <>
      <div className='form-container-container'>
        <h1 className='tittle-form'>Login</h1>
        <div className='form-container'>
          <form onSubmit={login}>
            <input className='input-form'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoSave='false'
            />
            <input className='input-form'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" onClick={() => { }}>
              Forgot password?
            </a>
            <button className='button-form'>Login</button>
            <p>Not a member? <a href="#" onClick={signUp}>
              Signup
            </a></p>
          </form>
        </div>
      </div>
    </>
  )
}