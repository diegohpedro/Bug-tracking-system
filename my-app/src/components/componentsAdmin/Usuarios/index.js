import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardUsuario from '../CardUsuario';

import api from '../../../services/api';

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        api.get('/admin/usuarios').then(response => {
            setUsuarios(response.data);
        });
    }, []);

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader
                    titulo='Usuarios'
                    descricao='Lista de usuários.'
                />
                {usuarios.map(usuario => {
                        return <CardUsuario key={usuario._id} id={usuario._id} nome={usuario.nome} />
                    })}
            </main>

        </section>
    )
}