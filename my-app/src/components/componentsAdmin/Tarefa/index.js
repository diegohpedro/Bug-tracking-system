import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

export default function Tarefa() {
    return(
        <section id='tarefa-admin'>
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