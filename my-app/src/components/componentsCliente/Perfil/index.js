import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import FotoCleiton from '../../../Img/cleiton.jpeg'

import './style.css'

import api from '../../../../services/api';

export default function PerfilAdmin() {
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        api.get('/perfil', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
        }).then(res => {
            setNome(res.data.nome)
            setEmail(res.data.email)
        }).catch(err => {
            return history.push('/');
        })
    }, []);

    return(
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
                        <img src={FotoCleiton} className='img-client'/>
                        <button className='btn-img'>Editar</button>
                    </div>
                    <div>
                        <h1 className='name'>Nome: </h1>
                        <h1 className='name-client'>{nome}</h1><button className='btn-name'>Editar</button>
                    </div>
                
                    <div>
                        <h1 className='e-mail'>Email: </h1>
                        <h1 className='email-client'>{email}</h1>
                        <button className='btn-email'>Editar</button>
                    </div>
                    
                    </div>
                </section>

            </main>

        </section>
    )
}