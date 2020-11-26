import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import FotoPerfil from '../../Img/perfilsemfoto.jpg';
// import './style.css'

import api from '../../../services/api';

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
                        <img src={FotoPerfil}/>                        
                        <button>Editar</button>
                    </div>
                    <div>
                        <h1>Nome: </h1>
                        <h1>{nome}</h1><button>Editar</button>
                    </div>
                
                    <div>
                        <h1>Email: </h1>
                        <h1>{email}</h1>
                        <button>Editar</button>
                    </div>
                    
                    </div>
                </section>

            </main>

        </section>
    )
}