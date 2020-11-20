import React from 'react';
import {Link} from 'react-router-dom';

export default function CardUsuario({nome, id, admin}) {
    return(
        <div>
            <h1>{nome}</h1>
            {(admin) ? <p>ADMIN</p> : null}
            <button>Ver(falta colocar modal)</button>
        </div>
    )
}