import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import CardDev from '../CardDev';

import api from '../../../services/api';

import './style.css';

export default function DashboardDev() {
    const history = useHistory();

    const [projetos, setProjetos] = useState([]);
    const [atualizar, setAtualizar] = useState(0);

    useEffect(() => {
        requisitarProjetos();
    }, [atualizar]);

    function requisitarProjetos() {
        api.get('/dev/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setProjetos(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    return (

            <section id='conteudo'>
                <SidebarDev />
                <main className='container-main'>
                    <h1>Projetos</h1>
                    <div className='container-projetos'>
                        <section className='row-card'>
                            <h1>Em andamento</h1>
                            {projetos.map((projeto, index) => {
                                if (projeto.status === 1) {
                                    return <CardDev key={index} assunto={projeto.assunto} id={projeto._id} descricao={projeto.descricao} tarefas={projeto.tarefas} desenvolvedores='João, Fábio' />

                                }
                            })}

                        </section>

                        <section className='row-card'>
                            <h1>Em análise</h1>
                            {projetos.map((projeto, index) => {
                                if (projeto.status === 2) {
                                    return <CardDev key={index} assunto={projeto.assunto} id={projeto._id} descricao={projeto.descricao} tarefas={projeto.tarefas} desenvolvedores='João, Fábio' />

                                }
                            })}
                        </section>

                        <section className='row-card'>
                            <h1>Finalizados</h1>

                        </section>
                    </div>
                </main>

            </section>

    )
}