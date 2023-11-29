import React from 'react'
import logo from '../../image/logo512.png'
import { useContext } from "react";
import { context } from '../../context/context'
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  const { user, setUser, setVisibleLogIn, setVisibleContact } = useContext(context);

  return (
    <>
      <div className='navbar-container'>
        <div className='logo-container'>
          <NavLink to="/">
            <img src={logo} alt="imagen" />
            <p>RegaLert</p>
          </NavLink>
        </div>
        <div className='links-container'>
          <ul>
            {user != '' ? (
              <>
                <NavLink to="/">
                  <li>{user}</li>
                </NavLink>
                <NavLink to="/plants">
                  <li>My plants</li>
                </NavLink>
                <NavLink to="/myplants">
                  <li>Reminders</li>
                </NavLink>
                <NavLink to="/history">
                  <li>Guides</li>
                </NavLink>
                <NavLink onClick={() => { setUser(false) }} to="#">
                  <li >Log out</li>
                </NavLink>
              </>

            ) : <>
              <NavLink onClick={() => { setVisibleLogIn(true) }} to="#">
                <li>Log in</li>
              </NavLink>
              <NavLink to="/history">
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
