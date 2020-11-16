import {isAuthenticated} from './services/auth';
import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './style.css';

import Login from './components/Login';
import Registro from './components/Registro';

import NovoChamado from './components/componentsCliente/Cliente/NovoChamado';
import DashboardCliente from './components/componentsCliente/Cliente/DashboardCliente';
import Perfil from './components/componentsCliente/Cliente/Perfil';
import TarefaCliente from './components/componentsCliente/Cliente/TarefaCliente';
import Ajuda from './components/componentsCliente/Cliente/Ajuda';

import DashboardAdmin from './components/componentsAdmin/DashboardAdmin';
import Tarefas from './components/componentsAdmin/Tarefas';
import TarefaAdmin from './components/componentsAdmin/TarefaAdmin'; 
import PerfilAdmin from './components/componentsAdmin/PerfilAdmin';
import Cadastro from './components/componentsAdmin/Cadastro';
import Usuarios from './components/componentsAdmin/Usuarios';
import Usuario from './components/componentsAdmin/Usuario';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location}}} />
        )
    )} />
)

export default function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                
                <Route exact path='/' component={Login}/>
                <Route path='/cadastro' component={Registro}/>

                {/* Rotas do cliente */}
                <PrivateRoute path='/dashboard' component={DashboardCliente}/>
                <Route path='/novochamado' component={NovoChamado}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/tarefa/:id' component={TarefaCliente}/>
                <Route path='/ajuda' component={Ajuda}/>

                {/* Rotas do admin  */}
                <Route path='/admin/dashboard' component={DashboardAdmin}/>
                <Route path='/admin/tarefas' component={Tarefas}/>
                <Route path='/admin/tarefa/:id' component={TarefaAdmin}/>
                <Route path='/admin/perfil' component={PerfilAdmin}/>
                <Route path='/admin/cadastro' component={Cadastro}/>
                <Route path='/admin/usuarios' component={Usuarios}/>
                <Route path='/admin/usuario/:id' component={Usuario}/>

            </Switch>
        </BrowserRouter> 
    )
}