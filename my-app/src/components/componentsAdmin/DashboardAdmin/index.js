import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardsChamado from '../CardsChamado';
import CardsKamban from '../CardsKamban';

import './style.css';

export default function DashboardAdmin() {
    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefas' 
                    descricao='Veja as tarefas concluídas, não concluídas e em progresso.'
                />
                <CardsKamban cor='card-ticketcriado' value='Criados' name='Tickets Criados' />
                <CardsKamban cor='card-ticketsemresposta' value='Sem resposta' name='Ticket sem resposta' />
                <CardsKamban cor='card-ticketandamento' value='Em andamento' name='Tickets em andamento' />
                <CardsKamban cor='card-ticketconcluido' value='Concluidos' name='Tickets Concluidos' />
                <CardsChamado/>
                <CardsChamado/>
                <CardsChamado/>
                <CardsChamado/>
            </main>
        </section>
    )
}