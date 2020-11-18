import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import api from '../../../services/api';

import FotoPerfil from '../../Img/perfilsemfoto.jpg';
import './style.css'

export default function PerfilAdmin() {
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        api.get('/admin/perfil', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
            }
        }).then(res => {
            setNome(res.data.nome)
            setEmail(res.data.email)
        }).catch(err => {
            localStorage.clear();
            return history.push('/');
        })
    }, []);

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <section>
                    <ConteudoHeader
                        titulo='Meu perfil'
                        descricao='Página para ver e editar perfil.'
                    />
                </section>

                <section className='perfil'>
                    <div >
                        <div>
                            <img src={FotoPerfil} />
                            <button className='editarImagem'>Editar</button>
                        </div>
                        <div>
                            <label>Nome: </label>
                            <h1>{nome}</h1><button>Editar</button>
                        </div>

                        <div>
                            <label>Email: </label>
                            <h1>{email}</h1>
                            <button>Editar</button>
                        </div>

                    </div>
                </section>

            </main>

        </section>
    )
}