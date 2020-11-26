import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

export default function Sidebar() {
    return(
        <aside id='sidebar'>
            <nav>
                <NavLink to='/admin/dashboard' activeClassName='selected'>Dashboard</NavLink>
                <NavLink to='/admin/perfil' activeClassName='selected'>Perfil</NavLink>
                <NavLink to='/admin/usuarios' activeClassName='selected'>Usuarios</NavLink>
                <NavLink to='/admin/projetos' activeClassName='selected'>Projetos</NavLink>
                <NavLink to='/admin/login' onClick={() => localStorage.clear()}>Sair</NavLink>
            </nav>
        </aside>
    )
}