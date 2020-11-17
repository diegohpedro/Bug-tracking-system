import React, {useEffect, useState} from 'react';
import SidebarCliente from '../Sidebar';
import CardKamban from '../Cards-Kamban/card-kamban';
import CardChamado from '../Cards-Chamado/card-chamado';

import api from '../../../../services/api';

import './style.css';

export default function DashboardCliente() {
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        
        api.get('/dashboard').then(res => {
            setChamados(res.data)
        }).catch(err => console.log(err));
    }, []);

    function mostrarChamados() {
        console.log(chamados);
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
                    <button type="submit" className="btn-buscar" onClick={mostrarChamados}>Buscar</button>
                </section>

                
                <section className='row-cardchamado'>

                    <h3 >Meus Chamados</h3>

                    {chamados.map(chamado => {
                        return <CardChamado key={chamado._id} id={chamado._id} status={chamado.status} nomeUsuario='Teste usuario' assunto={chamado.assunto} />
                    })}
                </section>

            </main>

        </section>
    )
}