import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SidebarCliente from '../Sidebar';
import CardKamban from '../Cards-Kamban/card-kamban';
import CardChamado from '../Cards-Chamado/card-chamado';

import api from '../../../services/api';

import './style.css';

export default function DashboardCliente() {
    const history = useHistory();
    const [usuarioId, setUsuarioId] = useState('');
    const [chamados, setChamados] = useState([]);
    const [meusChamados, setMeusChamados] = useState([]);
    const [chamadosAbertos, setChamadosAbertos] = useState([]);
    const [chamadosProgresso, setChamadosProgresso] = useState([]);
    const [chamadosFinalizados, setChamadosFinalizados] = useState([]);

    useEffect(() => {

        api.get('/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setChamados(res.data.chamados);
            setUsuarioId(res.data.usuarioId)

            setMeusChamados(chamados.filter(chamado => chamado.usuario._id === usuarioId));

            setChamadosAbertos(meusChamados.filter(chamado => chamado.status === 1));
            setChamadosProgresso(meusChamados.filter(chamado => chamado.status === 2));
            setChamadosFinalizados(meusChamados.filter(chamado => chamado.status === 3));
        }).catch(err => {

            return history.push('/');
        });
    }, [chamados]);

    return (
        <section id='conteudo'>
            <SidebarCliente />
            <main >

                <section className='row-cards'>
                    <CardKamban cor='card-meuschamados' quantidade={meusChamados.length} value='Chamados' name='Meus Chamados' />
                    <CardKamban cor='card-atendimento' quantidade={chamadosAbertos.length} name='Aberto' />
                    <CardKamban cor='card-verificacliente' quantidade={chamadosProgresso.length} name='Em progresso' />
                    <CardKamban cor='card-finalizado' quantidade={chamadosFinalizados.length} name='Finalizados' />
                </section>

                <section className='row-inputbusca'>
                    {/* <label>Ex.(bug na pagina inicial)</label> */}
                    <input type="search" className='inputbusca' placeholder='Ex.(bug na pagina inicial)' />
                    <button type="submit" className="btn-buscar" >Buscar</button>
                </section>


                <section className='row-ticketsCliente'>

                    <h3 className='m-chamados'>Meus Chamados</h3>

                    <div className='headerTicketsCliente'>

                        <div className='statusTicketsCliente'>
                            <h3>Status</h3>
                        </div>
                        <div className='autorTicketsCliente'>
                            <h3>Autor</h3>
                        </div>
                        <div className='assuntoTicketsCliente'>
                            <h3>Assunto</h3>
                        </div>
                    </div>

                    {meusChamados.map(chamado => {
                        return <CardChamado key={chamado._id} id={chamado._id} status={chamado.status} nomeUsuario={chamado.usuario.nome} assunto={chamado.assunto} />
                    })}
                </section>

            </main>

        </section>
    )
}