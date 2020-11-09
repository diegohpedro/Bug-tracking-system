import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NovoChamado from './components/componentsCliente/Cliente/NovoChamado';



import Login from './components/Login';
import Registro from './components/Registro';

import DashboardCliente from './components/componentsCliente/Cliente/DashboardCliente';
import Perfil from './components/componentsCliente/Cliente/Perfil';
import Ajuda from './components/componentsCliente/Cliente/Ajuda';

import DashboardAdmin from './components/componentsAdmin/DashboardAdmin';
import Tarefas from './components/componentsAdmin/Tarefas';
import Tarefa from './components/componentsAdmin/Tarefa'; 

import './style.css';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Switch>

                
                <Route exact path='/' component={Login}/>
                <Route path='/registro' component={Registro}/>

                {/* Rotas do cliente */}
                <Route path='/dashboard' component={DashboardCliente}/>
                <Route path='/novochamado' component={NovoChamado}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/ajuda' component={Ajuda}/>

                {/* Rotas do admin  */}
                <Route path='/admin/dashboard' component={DashboardAdmin}/>
                <Route path='/admin/tarefas' component={Tarefas}/>
                <Route path='/admin/tarefa/:id' component={Tarefa}/>   
               
            </Switch>
        </BrowserRouter> 
    )
}