import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import './style.css';

export default function DashboardAdmin() {
    return(
        <section id='dashboard-admin'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Dashboard Admin' 
                    descricao='Página de dashboard.'
                />

                <h1>Dashboard</h1>
            </main>
        </section>
    )
}