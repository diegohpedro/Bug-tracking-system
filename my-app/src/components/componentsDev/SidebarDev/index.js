import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function SidebarCliente() {

    return(
        <aside id='sidebar'>
            <nav>
                <Link to='/dev/dashboard'>Dashboard</Link>
                <Link to='/dev/perfil' >Meu perfil</Link>
                <Link to='/' onClick={() => localStorage.clear()}>Sair</Link>
            </nav>
        </aside>
    )
}