import React from 'react';

import './style.css';

export default function ConteudoHeader({titulo, descricao}) {
    return(
        <header id='conteudo-header'>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </header>
    )
}