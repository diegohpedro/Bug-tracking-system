import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardsChamado from '../CardsChamado';
import CardsKamban from '../CardsKamban';

import api from '../../../services/api';

import './style.css';

export default function DashboardAdmin() {
    const history = useHistory();
    const [usuarioId, setUsuarioId] = useState('');
    const [chamados, setChamados] = useState([]);

    useEffect(() => {

        api.get('/admin/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        }).then(res => {
            setChamados(res.data);
        }).catch(err => {
            localStorage.clear();
            return history.push('/login');
        });
    }, []);

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader
                    titulo='Tarefas'
                    descricao='Veja as tarefas concluídas, não concluídas e em progresso.'
                />
                <section className='cards'> 
                <CardsKamban cor='card-ticketcriado' value='Criados' name='Tickets Criados' />
                <CardsKamban cor='card-ticketsemresposta' value='Sem resposta' name='Ticket sem resposta' />
                <CardsKamban cor='card-ticketandamento' value='Em andamento' name='Tickets em andamento' />
                <CardsKamban cor='card-ticketconcluido' value='Concluidos' name='Tickets Concluidos' />
                </section>

            <section className='row-ticketsAdm'>
            <h2>Chamados</h2>
                <div className='headerTicketsAdm'>
            
                <div className='assuntoTicketsAdm'>
                    <h3>Assunto</h3>
                </div>
                <div className='nomeTicketsAdm'>
                    <h3>Nome Cliente</h3>
                </div>
                <div className='statusTicketsAdm'>
                    <h3>Status</h3>
                </div>
                </div>

                
                
                
                
                {chamados.map(chamado => {
                    if (chamado.usuario._id) {
                        return <CardsChamado key={chamado._id} id={chamado._id} status={chamado.status} nomeUsuario={chamado.usuario.nome} assunto={chamado.assunto} />
                    }
                })}
                </section>
                

            </main>
        </section>
    )
}