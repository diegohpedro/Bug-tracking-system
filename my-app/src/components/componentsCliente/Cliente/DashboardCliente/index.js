import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import SidebarCliente from '../Sidebar';
import CardKamban from '../Cards-Kamban/card-kamban';
import CardChamado from '../Cards-Chamado/card-chamado';

import api from '../../../../services/api';

import './style.css';

export default function DashboardCliente() {
    const history = useHistory();
    const [usuarioId, setUsuarioId] = useState('');
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        
        api.get('/dashboard', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).then(res => {
            setChamados(res.data.chamados);
            setUsuarioId(res.data.usuarioId);
        }).catch(err => {
            
            return history.push('/');
        });
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
                        if(chamado.usuario._id === usuarioId) {
                            return <CardChamado key={chamado._id} id={chamado._id} status={chamado.status} nomeUsuario={chamado.usuario.nome} assunto={chamado.assunto} />
                        }
                    })}
                </section>

            </main>

        </section>
    )
}