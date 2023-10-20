import React, { useState } from 'react'; // <-- Agregado useState
import { useContext } from "react";
import { context } from '../../context/context'

export const Login = ({ setVisibleOther, setVisibleSelf }) => {

  const { setUser, setVisibleLogIn } = useContext(context);

  // Estados para los inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    setVisibleSelf(false);
    setVisibleOther(true);
  }

  const login = async (e) => { // <-- Agregado async para permitir llamadas asíncronas
    e.preventDefault();
    setUser('Diego');

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
      console.log(data)
    } catch (error) {
      console.error('Hubo un error al hacer login:', error);
    }

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
              value={email} // <-- Vincula el estado 'email'
              onChange={(e) => setEmail(e.target.value)} // <-- Actualiza el estado 'email' con cada cambio
            />
            <input className='input-form'
              type="password"
              placeholder="Password"
              value={password} // <-- Vincula el estado 'password'
              onChange={(e) => setPassword(e.target.value)} // <-- Actualiza el estado 'password' con cada cambio
            />
            <a href="#" onClick={() => { }}>
              Forgot password?
            </a>
            <button className='button-form' onClick={(e) => login(e)}>Login</button>
            <p>Not a member? <a href="#" onClick={() => signUp()}>
              Signup
            </a></p>
          </form>
        </div>
      </div>
    </>
  )
}
