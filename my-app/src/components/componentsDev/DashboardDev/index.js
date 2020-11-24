import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SidebarDev from '../SidebarDev';


import api from '../../../services/api';

import './style.css';

export default function DashboardDev() {
    const history = useHistory();
    const [projetos, setProjetos] = useState([]);
    const [projetosAndamento, setProjetosAndamento] = useState();

    async function atualizarProjetos() {
        let {data} = await api.get('/dev/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setProjetos(data);
    }
    
    useEffect(() => {
        atualizarProjetos();
    }, []);

    return (
        <section id='conteudo'>
            <SidebarDev />
            <main className='container-main'>
                <h1>Projetos</h1>
                <div className='container-projetos'>
                    <section>
                        <h1>Em andamento</h1>
                        {projetos.map( (projeto, index) => (<div key={index}>
                                <label>Assunto: {projeto.assunto}</label>
                                <label>Tarefas: {projeto.tarefas.length}</label>
                                <label>Desenvolvedores</label>
                            </div>))}
                    </section>

                    <section>
                        <h1>Em análise</h1>
                    </section>

                    <section>
                        <h1>Finalizados</h1>
                    </section>
                </div>
            </main>

        </section>
    )
}