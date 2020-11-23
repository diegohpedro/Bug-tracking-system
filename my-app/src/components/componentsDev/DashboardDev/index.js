import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SidebarDev from '../SidebarDev';


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
            <SidebarDev />
            <main className='container-main'>
                <h1>Projetos</h1>
                <div className='container-projetos'>
                    <section>
                        <h1>Em andamento</h1>
                        
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