import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar';
import CardDev from '../CardDev';


import api from '../../../services/api';

import './style.css';

export default function DashboardCliente() {
    const history = useHistory();
    const [projetos, setProjetos] = useState();
    const [projetosAndamento, setProjetosAndamento] = useState();

    

    useEffect(async () => {
        const {data} = await api.get('/dev/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        setProjetos(data);
        
    }, []);

    return (
        <section id='conteudo'>
            <Sidebar />
            <main className='container-main'>
                <h1>Projetos</h1>
                <div className='container-projetos'>
                    <section className='row-card'>
                        <h1>Em andamento</h1>
                        <CardDev />
                        <CardDev/>
                        <CardDev/>
                    </section>

                    <section className='row-card'>
                        <h1>Em análise</h1>
                        <CardDev />
                        <CardDev/>
                    </section>

                    <section className='row-card'>
                        <h1>Finalizados</h1>
                        <CardDev />
                    </section>
                </div>
            </main>

        </section>
    )
}