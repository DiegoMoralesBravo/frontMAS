import React from 'react'
import logo from '../../image/microscope.svg'
import { useContext } from "react";
import { context } from '../../context/context'
import { NavLink } from "react-router-dom";


const generation = async (e) => {
  e.preventDefault();

  console.log('Generation')

  // API call to send data
  try {
    const response = await fetch('https://apimas.onrender.com/generation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imagen: 'imagen'
      })
    });
    const data = await response.json();
    
    console.log(data);

  } catch (error) {
    console.error("There was an error sending the data:", error);
  }
}

export const Navbar = () => {
  const { user, setUser, setVisibleLogIn, setVisibleContact } = useContext(context);

  return (
    <>
      <div className='navbar-container'>
        <div className='logo-container'>
          <NavLink to="/">
            <img src={logo} alt="imagen" />
            <p><strong>MAS</strong></p>
            <p>Micrograph Analysis System</p>
          </NavLink>
        </div>
        <div className='links-container'>
          <ul>
            {user != '' ? (
              <>
                <NavLink to="/">
                  <li>{user}</li>
                </NavLink>
                <NavLink to="/report">
                  <li>Report</li>
                </NavLink>
                <NavLink to="/history">
                  <li>History</li>
                </NavLink>
                <NavLink onClick={() => { setUser(false) }} to="#">
                  <li >Log out</li>
                </NavLink>
              </>

            ) : <>
              <NavLink onClick={() => { setVisibleLogIn(true) }} to="#">
                <li>Log in</li>
              </NavLink>
              <NavLink onClick={generation} to="#">
                <li>Docs</li>
              </NavLink>
              <NavLink onClick={() => { setVisibleContact(true) }} to="#">
                <li>Contact</li>
              </NavLink>
            </>}
          </ul>
        </div>
      </div>
    </>
  )
}
