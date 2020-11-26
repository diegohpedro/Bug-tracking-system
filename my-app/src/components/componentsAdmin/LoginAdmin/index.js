import React, {useState, useEffect} from 'react';
import { useHistory, Link} from 'react-router-dom';
import './style.css'
import image from '../../Img/analytics_process_flatline.svg'
import api from '../../../services/api';


export default function LoginAdmin() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      
      return history.push('/dashboard');
    } else if (localStorage.getItem('adminToken')) {
      
      return history.push('/admin/dashboard');
    }
  }, []);

  function entrar(event) {
    event.preventDefault();

    const body = {
      email,
      senha
    }

    api.post('/admin/login', body).then(res => {

      localStorage.setItem('adminToken', res.data.token);

      return history.push('/admin/dashboard');
    }).catch(err => {
      localStorage.clear();
      alert('Email/senha incorretos.')
    })

  }

  return (
    <section className="container-login">
      <div className='login-content'>

        <header className="content-header">
          <h2>Login (Admin)</h2>
        </header>

        <form className="login-form">
          
          <img src={image} className='imagem' alt="Desenho de um homem analisando dados" />

          <div className='row'>
            <label htmlFor="inputUser" className='email'>Email</label>
            <input className="input-login"
              value={email}
              onChange={event => setEmail(event.target.value)}
              type="text"
              id="inputUser"
              name="user"
            />
          </div>
          <div className='row'>
            <label htmlFor="inputPassword" className='senha'>Senha</label>
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

        <div className='row' className='btn-voltar'>
                    <Link to='/'>Voltar</Link>
                </div>
      </div>

      
    </section >
  )
}