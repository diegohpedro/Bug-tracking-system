import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './style.css'

import api from '../../services/api';

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar(event) {
    event.preventDefault();

    const body = {
      email,
      senha
    }

    api.post('/', body).then(res => {

      localStorage.setItem('token', res.data.token);

      return history.push('/dashboard');
    }).catch(err => {
      alert('Email/senha incorretos.')
    })

  }

  return (
    <section className="container-login">

      <div className='login-content'>

        <header className="content-header">
          <h2>Login</h2>
        </header>

        <form className="login-form">
          <div className='row'>
            <label htmlFor="inputUser">Email</label>
            <input className="input-login"
              value={email}
              onChange={event => setEmail(event.target.value)}
              type="text"
              id="inputUser"
              name="user"
            />
          </div>
          <div className='row'>
            <label htmlFor="inputPassword" >Senha</label>
            <input className="input-login"
              value={senha}
              onChange={event => setSenha(event.target.value)}
              type="password"
              id="inputPassword"
              name="password"
            />
          </div>
          <div className='row'>
            <button type="submit" className="btn-login" onClick={entrar}>Entrar</button>
          </div>

        </form>

      </div>

      
    </section >
  )
}