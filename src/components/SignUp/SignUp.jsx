import React, { useState } from 'react'
import { useContext } from "react";
import { context } from '../../context/context'

export const SignUp = ({ setVisibleOther, setVisibleSelf }) => {
  const { user } = useContext(context);

  // Define states for input fields
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clearForm = () => {
    setEmail("");
    setOccupation("");
    setPassword("");
    setConfirmPassword("");
  }

  const signUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      clearForm(); // Clear the form when passwords don't match
      return;
    }

    const data = {
      email,
      password,
      occupation
    };

    console.log(data)

    // API call to send data
    fetch('https://apimas.onrender.com/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <div className='form-container-container'>
        <h1 className='tittle-form'>Sign up</h1>
        <div className='form-container'>
          <form onSubmit={signUp}>
            <input className='input-form'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select className='input-form' value={occupation} onChange={(e) => setOccupation(e.target.value)}>
              <option value="" disabled>Select your occupation</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="researcher">Researcher</option>
              <option value="other">Other</option>
            </select>

            <input className='input-form'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input className='input-form'
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className='button-form'>Sign up</button>
          </form>
        </div>
      </div>
    </>
  )
}
