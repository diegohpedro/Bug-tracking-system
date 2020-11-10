import React, {useEffect, useState} from 'react';
import SidebarCliente from '../Sidebar';
import CardKamban from '../Cards-Kamban/card-kamban';
import CardChamado from '../Cards-Chamado/card-chamado';

import api from '../../../../services/api';

import './style.css';

export default function DashboardCliente() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        api.get('/dashboard').then(response => {
            setTarefas(response.data);
        });
    }, []);

    function mostrarTarefas() {
        console.log(tarefas);
    }

    return (
        <section id='conteudo'>
            <SidebarCliente />
            <main >
                
                <section className='row-cards'>
                    <CardKamban cor='card-meuschamados' value='Chamados' name='Meus Chamados' />
                    <CardKamban cor='card-atendimento' value='Atendendo ' name='Em Atendimento' />
                    <CardKamban cor='card-verificacliente' value='Verifica ' name='Verificação do Cliente' />
                    <CardKamban cor='card-finalizado' value='Finalizados ' name='finalizados' />
                </section>

                <section className='row-inputbusca'>
                    <label>Ex.(bug na pagina inicial)</label>
                    <input type="search" className='inputbusca' placeholder='Procurar'/>
                    <button type="submit" className="btn-buscar" onClick={mostrarTarefas}>Buscar</button>
                </section>

                
                <section className='row-cardchamado'>

                    <h3 >Meus Chamados</h3>

                    {tarefas.map(tarefa => {
                        return <CardChamado key={tarefa._id} id={tarefa._id} assunto={tarefa.assunto} />
                    })}
                </section>

            </main>

        </section>
    )
}