import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import CardsChamado from '../CardsChamado';
import CardsKamban from '../CardsKamban';

import api from '../../../services/api';

import './style.css';

export default function DashboardAdmin() {
    const history = useHistory();
    const [usuarioId, setUsuarioId] = useState('');
    const [atualizar, setAtualizar] = useState();
    const [chamados, setChamados] = useState([]);
    const [chamadosAbertos, setChamadosAbertos] = useState([]);
    const [chamadosProgresso, setChamadosProgresso] = useState([]);
    const [chamadosFinalizados, setChamadosFinalizados] = useState([]);

    useEffect(() => {
        api.get('/admin/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        }).then(res => {
            setChamados(res.data);

        }).catch(err => {
            localStorage.clear();
            return history.push('/');
        });
    }, []);

    useEffect(() => {
        setChamadosAbertos(chamados.filter(chamado => chamado.status === 1));
        setChamadosProgresso(chamados.filter(chamado => chamado.status === 2));
        setChamadosFinalizados(chamados.filter(chamado => chamado.status === 3));
    }, [chamados]);

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>

                <CardsKamban cor='card-ticketcriado' quantidade={chamados.length} name='Chamados' />
                <CardsKamban cor='card-ticketsemresposta' quantidade={chamadosAbertos.length} name='Abertos' />
                <CardsKamban cor='card-ticketandamento' quantidade={chamadosProgresso.length} name='Em progresso' />
                <CardsKamban cor='card-ticketconcluido' quantidade={chamadosFinalizados.length} name='Finalizados' />

            <section className='row-ticketsAdm'>
                {/* <h2>Chamados</h2> */}
                <div className='headerTicketsAdm'>
            
                <div className='assuntoTicketsAdm'>
                    <h3>Assunto</h3>
                </div>
                <div className='autorTicketsAdm'>
                    <h3 className='aut'>Autor</h3>
                </div>
                <div className='statusTicketsAdm'>
                    <h3 className='sta'>Status</h3>
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