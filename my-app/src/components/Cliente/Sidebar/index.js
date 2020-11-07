import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function SidebarCliente() {
    return(
        <aside id='sidebar'>
            <nav>
                <Link to='/meuschamados'>Meus Chamados</Link>
                <Link to='/novochamado'>Novo chamado</Link>
                <Link to='/perfil' >Meu perfil</Link>
                <Link to='/ajuda' >Ajuda</Link>
            </nav>
        </aside>
    )
}