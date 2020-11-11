import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

export default function PerfilAdmin() {
    return(
        <section id='conteudo'>
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