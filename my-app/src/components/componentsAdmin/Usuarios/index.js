import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardUsuario from '../CardUsuario';

import api from '../../../services/api';

export default function Usuarios() {
    const history = useHistory();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        requisitarUsuarios();
    }, []);

    function requisitarUsuarios() {
        api.get('/admin/usuarios', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        }).then(res => {
            setUsuarios(res.data);
        }).catch(err => {
            localStorage.clear();
            return history.push('/');
        });
    }

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader
                    titulo='Usuarios'
                    descricao='Lista de usuários.'
                />
                {usuarios.map(usuario => {
                        return <CardUsuario key={usuario._id} acao={requisitarUsuarios} email={usuario.email} id={usuario._id} nome={usuario.nome} dev={usuario.dev} admin={usuario.admin}/>
                    })}
            </main>

        </section>
    )
}