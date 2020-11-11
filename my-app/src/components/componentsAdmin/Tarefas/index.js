import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import CardsChamado from '../CardsChamado';
import CardsKamban from '../CardsKamban';

import './style.css';

export default function Tarefas() {
    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader 
                    titulo='Tarefas' 
                    descricao='Veja as tarefas concluídas, não concluídas e em progresso.'
                />

                
            </main>
        </section>
    )
}