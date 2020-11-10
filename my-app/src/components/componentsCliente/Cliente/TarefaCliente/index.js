import React, {useEffect, useState} from 'react';
import { useParams, useHistory} from 'react-router-dom';

import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import api from '../../../../services/api';

export default function TarefaCliente(props) {
    const history = useHistory();

    const params = useParams();
    const [tarefa, setTarefa] = useState();

    useEffect(() => {
        api.get(`tarefa/${params.id}`).then(response => {
            setTarefa(response.data);
        })
    }, [params.id]);

    if (!tarefa) {
      return <p>Carregando...</p>
    }

    function voltar() {
        history.push('/dashboard');
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
                <h1>{tarefa.assunto}</h1>
                <p>{tarefa.descricao}</p>
                <h2>Criado há tantos dias.</h2>
                <h3>{tarefa.status}</h3>
                <h4>Nome do criador: {tarefa.nome}</h4>
                <button onClick={voltar}>Voltar</button>
            </main>

        </section>
    )
}