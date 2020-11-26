import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

function DashboardDev() {

    return (
        <section id='conteudo'>
            <SidebarDev />
            <main className='container-main'>
                <h1>Projetos</h1>
                <div className='container-projetos'>
                    <section className='row-card'>
                        <h1>Aguardando análise</h1>
                        
                    </section>

                    <section className='row-card'>
                        <h1>Finalizados</h1>

                    </section>
                </div>
            </main>

        </section>
    )

}

export default DashboardDev;