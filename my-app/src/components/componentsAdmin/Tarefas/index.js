import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader'

export default function Tarefas() {
    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefas' 
                    descricao='Página para abrir novo chamado.'
                />

                
            </main>
        </section>
    )
}