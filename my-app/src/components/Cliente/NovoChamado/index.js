import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import './style.css';

export default function NovoChamado() {
    return(
        <section id='novo-chamado'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Novo chamado' 
                    descricao='Página para abrir novo chamado.'
                />
            </main>

        </section>
    )
}