import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardsKamban from '../Cards-Kamban/card-kamban';
import CardsChamado from '../Cards-Chamado/card-chamado';
import './style.css';

export default function Tarefas() {
    return(
        <section id='tarefas'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefas' 
                    descricao='Veja as tarefas concluídas, não concluídas e em progresso.'
                />
                <CardsKamban cor='card-meuschamados-agente' value='Chamados' name='Meus Chamados' />
                <CardsKamban cor='card-test' value='Chamados' name='Meus Chamados' />
                <CardsKamban cor='card-meuschamados-agente' value='Chamados' name='Meus Chamados' />
                <CardsKamban cor='card-meuschamados-agente' value='Chamados' name='Meus Chamados' />
                <CardsChamado/>
                <CardsChamado/>
                <CardsChamado/>
                <CardsChamado/>
        

            </main>

        </section>
    )
}