import React from 'react';
import {Link} from 'react-router-dom';

export default function CardUsuario({nome, id}) {
    return(
        <div>
            <h1>{nome}</h1>
            <Link to={`/admin/usuario/${id}`}>Ver</Link>
        </div>
    )
}