import React, {useEffect, useState} from 'react';
import { useParams, useHistory} from 'react-router-dom';

import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import api from '../../../services/api';

export default function Usuario(props) {
    const history = useHistory();

    const params = useParams();
    const [usuario, setUsuario] = useState();

    useEffect(() => {
        api.get(`/admin/usuario/${params.id}`).then(response => {
            setUsuario(response.data);
        })
    }, [params.id]);

    if (!usuario) {
      return <p>Carregando...</p>
    }

    function voltar() {
        history.push('/admin/usuarios');
    }

    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <section>
                    <ConteudoHeader
                        titulo='Tarefa'
                        descricao='Pagina da tarefa'
                    />
                </section>
                <h1>Nome: {usuario.nome}</h1>
                <h2>Email: {usuario.email}</h2>
                <h2>Tipo de usuário: {usuario.tipo}</h2>
                <button onClick={voltar}>Voltar</button>
                <button>Editar perfil</button>
            </main>

        </section>
    )
}