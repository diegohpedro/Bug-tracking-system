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
        api.get('/admin/usuarios', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        }).then(res => {
            setUsuarios(res.data);
        }).catch(err => {
            localStorage.clear();
            return history.push('/login');
        });
    }, [usuarios]);

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader
                    titulo='Usuarios'
                    descricao='Lista de usuarios.'
                />
                {usuarios.map(usuario => {
                        return <CardUsuario key={usuario._id} id={usuario._id} nome={usuario.nome} admin={usuario.admin}/>
                    })}
            </main>

        </section>
    )
}