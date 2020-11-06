import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import './style.css';

export default function Ajuda() {
    return(
        <section id='ajuda'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Ajuda' 
                    descricao='Página de ajuda ao usuário.'
                />
            </main>

        </section>
    )
}