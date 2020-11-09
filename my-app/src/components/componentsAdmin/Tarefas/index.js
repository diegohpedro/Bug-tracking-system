import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardsKamban from '../Cards-Kamban/card-kamban';
import CardsChamado from '../Cards-Chamado/card-chamado';
import './style.css';

export default function Tarefas() {
    return(
        <section id='tarefas-admin'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefas' 
                    descricao='Página para abrir novo chamado.'
                />
                <CardsKamban cor='card-meuschamados-agente' value='Chamados' name='Meus Chamados' />
                <CardsKamban cor='card-test' value='Chamados' name='Meus Chamados' />
                <CardsKamban cor='card-meuschamados-agente' value='Chamados' name='Meus Chamados' />
                <CardsKamban cor='card-meuschamados-agente' value='Chamados' name='Meus Chamados' />
                <CardsChamado/>
                <CardsChamado/>
                <CardsChamado/>
                <CardsChamado/>
        

                <h1>Tarefas</h1>
            </main>
        </section>
    )
}