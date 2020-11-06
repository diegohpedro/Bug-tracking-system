import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './components/Inicio';
import Tarefas from './components/Tarefas';
import NovoChamado from './components/NovoChamado';
import Perfil from './components/Perfil';
import Ajuda from './components/Ajuda';
import './style.css';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Inicio}/>
                <Route path='/tarefas' component={Tarefas}/>
                <Route path='/novochamado' component={NovoChamado}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/ajuda' component={Ajuda}/>
            </Switch>
        </BrowserRouter> 
    )
}