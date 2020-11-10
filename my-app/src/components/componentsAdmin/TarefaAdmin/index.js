import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

export default function TarefaAdmin() {
    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefa' 
                    descricao='Tarefa específica.'
                />

                <h1>Tarefa específica</h1>
            </main>
        </section>
    )
}