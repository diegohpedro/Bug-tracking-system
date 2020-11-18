import {isAuthenticated} from './services/auth';
import {AdminAuthenticated} from './services/authAdmin';
import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './style.css';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import LoginAdmin from './components/componentsAdmin/LoginAdmin';

import NovoChamado from './components/componentsCliente/Cliente/NovoChamado';
import DashboardCliente from './components/componentsCliente/Cliente/DashboardCliente';
import Perfil from './components/componentsCliente/Cliente/Perfil';
import TarefaCliente from './components/componentsCliente/Cliente/TarefaCliente';
import Ajuda from './components/componentsCliente/Cliente/Ajuda';

import DashboardAdmin from './components/componentsAdmin/DashboardAdmin';
import Tarefas from './components/componentsAdmin/Tarefas';
import TarefaAdmin from './components/componentsAdmin/TarefaAdmin'; 
import PerfilAdmin from './components/componentsAdmin/PerfilAdmin';
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

const PrivateAdminRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        AdminAuthenticated() ? (
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
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/admin/login' component={LoginAdmin}/>

                
                <PrivateRoute path='/dashboard' component={DashboardCliente}/>
                <PrivateRoute path='/novochamado' component={NovoChamado}/>
                <PrivateRoute path='/perfil' component={Perfil}/>
                <PrivateRoute path='/tarefa/:id' component={TarefaCliente}/>
                <PrivateRoute path='/ajuda' component={Ajuda}/>

                
                <PrivateAdminRoute path='/admin/dashboard' component={DashboardAdmin}/>
                <PrivateAdminRoute path='/admin/tarefas' component={Tarefas}/>
                <PrivateAdminRoute path='/admin/tarefa/:id' component={TarefaAdmin}/>
                <PrivateAdminRoute path='/admin/perfil' component={PerfilAdmin}/>
                <PrivateAdminRoute path='/admin/usuarios' component={Usuarios}/>
                <PrivateAdminRoute path='/admin/usuario/:id' component={Usuario}/>

            </Switch>
        </BrowserRouter> 
    )
}