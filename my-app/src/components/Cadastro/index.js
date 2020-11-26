import React, { useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css'

import api from '../../services/api';

export default function Cadastro() {
    const history = useHistory();

    const [nome, setNome] = useState('');
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
            nome,
            email,
            senha
        }

        api.post('/cadastro', body).then(res => {
            alert('Usuário cadastrado');
            localStorage.setItem('token', res.data.token);

            return history.push('/dashboard');
        }).catch(err => {
            localStorage.clear();
            alert('Email já cadastrado');
        })

    }

    return (
        <section className="container-login">

            <div className='login-content'>

                <header className="content-header">
                    <h2>Cadastro</h2>
                </header>

                <form className="login-form">
                    <div className='row'>
                        <label htmlFor="inputUser">Nome</label>
                        <input className="input-login"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                            type="text"
                            id="inputUser"
                            name="user"
                        />
                    </div>

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