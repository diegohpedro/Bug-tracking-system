import { ClientAuthenticated, AdminAuthenticated } from './services/auth';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './style.css';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import LoginAdmin from './components/componentsAdmin/LoginAdmin';

import NovoChamado from './components/componentsCliente/Cliente/NovoChamado';
import DashboardCliente from './components/componentsCliente/Cliente/DashboardCliente';
import Perfil from './components/componentsCliente/Cliente/Perfil';

import DashboardAdmin from './components/componentsAdmin/DashboardAdmin';
import PerfilAdmin from './components/componentsAdmin/PerfilAdmin';
import Usuarios from './components/componentsAdmin/Usuarios';

import DashboardDev from './components/componentsDev/DashboardDev';
import PerfilDev from './components/componentsDev/PerfilDev';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        ClientAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
)

const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        AdminAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
)

export default function Rotas() {
<<<<<<< HEAD
    return (
            <BrowserRouter>
                <Switch>

                    <Route exact path='/' component={Login} />
                    <Route path='/cadastro' component={Cadastro} />
                    <Route path='/admin/login' component={LoginAdmin} />


                    <PrivateRoute path='/dashboard' component={DashboardCliente} />
                    <PrivateRoute path='/novochamado' component={NovoChamado} />
                    <PrivateRoute path='/perfil' component={Perfil} />



                    <PrivateAdminRoute path='/admin/dashboard' component={DashboardAdmin} />
                    <PrivateAdminRoute path='/admin/perfil' component={PerfilAdmin} />
                    <PrivateAdminRoute path='/admin/usuarios' component={Usuarios} />

                    <Route path='/dev/dashboard' component={DashboardDev} />

                </Switch>
            </BrowserRouter>
=======
    return(
        <BrowserRouter>
            <Switch>
                
                <Route exact path='/' component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/admin/login' component={LoginAdmin}/>

                
                <PrivateRoute path='/dashboard' component={DashboardCliente}/>
                <PrivateRoute path='/novochamado' component={NovoChamado}/>
                <PrivateRoute path='/perfil' component={Perfil}/>
                

                
                <PrivateAdminRoute path='/admin/dashboard' component={DashboardAdmin}/>
                <PrivateAdminRoute path='/admin/perfil' component={PerfilAdmin}/>
                <PrivateAdminRoute path='/admin/usuarios' component={Usuarios}/>

                <Route path='/dev/dashboard' component={DashboardDev} />
                <Route path='/dev/perfil' component={PerfilDev} />

            </Switch>
        </BrowserRouter> 
>>>>>>> c14764f1ff201b50893199355a57983933a286d2
    )
}