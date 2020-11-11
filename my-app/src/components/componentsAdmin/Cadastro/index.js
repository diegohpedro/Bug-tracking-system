import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

export default function Cadastro() {
    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Cadastro' 
                    descricao='Cadastro de usuários.'
                />
            </main>

        </section>
    )
}