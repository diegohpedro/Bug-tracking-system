import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

export default function Sidebar() {
    return(
        <aside id='sidebar'>
            <nav>
                <NavLink to='/admin/dashboard' activeClassName='selected'>Dashboard</NavLink>
                <NavLink to='/admin/perfil' >Perfil</NavLink>
                <NavLink to='/admin/usuarios' >Usuarios</NavLink>
                <NavLink to='/admin/login' onClick={() => localStorage.clear()}>Sair</NavLink>
            </nav>
        </aside>
    )
}