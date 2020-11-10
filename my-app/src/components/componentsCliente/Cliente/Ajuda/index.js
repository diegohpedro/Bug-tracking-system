import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

export default function Ajuda() {
    return(
        <section id='conteudo'>
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