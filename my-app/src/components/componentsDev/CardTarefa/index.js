import React, {useEffect, useState} from 'react';

import api from '../../../services/api';

export default function CardTarefa({id, acao, tarefas}) {
    const [descricao, setDescricao] = useState();
    const [responsavel, setResponsavel] = useState();
    const [completo, setCompleto] = useState();
    const [atualizar, setAtualizar] = useState(0);

    useEffect(() => {
        requisitarTarefa();
    }, [atualizar]);

    function requisitarTarefa() {
        api.get(`/dev/tarefa/${id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            const {data} = res;
            setDescricao(data.descricao);
            setResponsavel(data.responsavel.nome);
            setCompleto(data.completo);
        }).catch(err => {
            console.log(err);
        });

        
    }

    function clickInput() {
        api.put(`/dev/tarefa/${id}`, null, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
        }).then(res => {
            setAtualizar(prev => prev + 1);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='card-tarefa'>
            <h1>{descricao} <input type='checkbox' checked={completo} onChange={clickInput}/></h1>
    
            <p>Desenvolvedor responsável: {responsavel}</p>
        </div>
    )
}