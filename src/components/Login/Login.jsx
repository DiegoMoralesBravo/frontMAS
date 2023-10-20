import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import { context } from '../../context/context'

export const Login = ({ setVisibleOther, setVisibleSelf }) => {

  const { setUser, setVisibleLogIn } = useContext(context);

  // Estados para los inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    setVisibleSelf(false)
    setVisibleOther(true)
  }

  const login = async (e) => { // <-- Agregado async para permitir llamadas asíncronas
    e.preventDefault();

    // Enviar datos a la API
    try {
      const response = await fetch('https://apimas.onrender.com/userValidation', { // <-- Reemplaza 'URL_DEL_ENDPOINT' con la URL de tu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Hubo un error al hacer login:', error);
    }
    setUser('Diego')
    setVisibleSelf(false);
  }

  return (
    <>
      <div className='form-container-container'>
        <h1 className='tittle-form'>Login</h1>
        <div className='form-container'>
          <form>
            <input className='input-form'
              type="email"
              placeholder="Email"
              autoSave='false'
            />
            <input className='input-form'
              type="password"
              placeholder="Password"
              
            />
            <a href="#" onClick={() => { }}>
              Forgot password?
            </a>
            <button className='button-form' onClick={(e) => login(e)} >Login</button>
            <p>Not a member? <a href="#" onClick={() => signUp()}>
              Signup
            </a></p>
          </form>
        </div>
      </div>
    </>
  )
}
