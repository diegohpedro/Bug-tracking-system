import React from 'react';
import './style.css'

export default function Login() {
  return (
    <section className="container">

      <div className='login-content'>

        <header className="content-header">
          <h2>Login</h2>
        </header>

        <form className="login-form">
          <div className='row'>
            <label htmlFor="inputUser">Usruario</label>
            <input
              type="text"
              id="inputUser"
              name="user"
            />
          </div>
          <div className='row'>
            <label htmlFor="inputPassword" >Password</label>
            <input
              type="password"
              id="inputPassword"
              name="password"
            />
          </div>
          <div className='row'>
            <button type="submit" className="btn-login">Logar</button>
          </div>

        </form>

      </div>

      
    </section >
  )
}