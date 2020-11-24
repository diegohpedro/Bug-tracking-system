import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function Sidebar() {
    return(
        <aside id='sidebar'>
            <nav>
                <Link to='/admin/dashboard' >Dashboard</Link>
                <Link to='/admin/perfil' >Perfil</Link>
                <Link to='/admin/usuarios' >Usuarios</Link>
                <Link to='/admin/login' onClick={() => localStorage.clear()}>Sair</Link>
            </nav>
        </aside>
    )
}