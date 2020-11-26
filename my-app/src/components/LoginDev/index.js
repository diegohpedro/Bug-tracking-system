import React, {useState, useEffect} from 'react';
import { useHistory, Link} from 'react-router-dom';

import api from '../../services/api';

export default function LoginDev() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      
      return history.push('/dashboard');

    } else if (localStorage.getItem('adminToken')) {
      
      return history.push('/admin/dashboard');

    } else if (localStorage.getItem('devToken')){

      return history.push('/dev/dashboard');

    }
  }, []);

  function entrar(event) {
    event.preventDefault();

    const body = {
      email,
      senha
    }

    api.post('/dev/login', body).then(res => {

      localStorage.setItem('devToken', res.data.token);

      return history.push('/dev/dashboard');
    }).catch(err => {
      localStorage.clear();
      alert('Email/senha incorretos.')
    })

  }

  return (
    <section className="container-login">

      <div className='login-content'>

        <header className="content-header">
          <h2>Login(Dev)</h2>
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

        <div className='row'>
                    <Link to='/'>Voltar</Link>
                </div>

      </div>

      
    </section >
  )
}