import React from 'react';
// import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './style.css';

export default function SidebarCliente() {
    return(
        <aside id='sidebar'>
            <nav>
                <NavLink to="/dashboard" activeClassName="selected">Dashboard</NavLink>
                <NavLink to="/novochamado" activeClassName="selected">Novo chamado</NavLink>
                <NavLink to="/perfil" activeClassName="selected">Meu perfil</NavLink>
                <NavLink to="/" onClick={() => localStorage.clear()}>Sair</NavLink>
            </nav>
        </aside>
    )
}