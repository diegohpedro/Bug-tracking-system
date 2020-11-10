import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader'

export default function Tarefas() {
    return(
        <section id='tarefas-admin'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefas' 
                    descricao='Página para abrir novo chamado.'
                />

                <h1>Tarefas</h1>
            </main>
        </section>
    )
}