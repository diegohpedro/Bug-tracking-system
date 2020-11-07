import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import './style.css';

export default function Perfil() {
    return(
        <section id='perfil'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Meu perfil' 
                    descricao='Página para ver e editar perfil.'
                />
            </main>

        </section>
    )
}