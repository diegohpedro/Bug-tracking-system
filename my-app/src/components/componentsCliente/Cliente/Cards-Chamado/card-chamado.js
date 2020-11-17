import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor

  return (
    <div className="cardchamado">
      <div className={cor} >
        <div className="cardchamado-body">
            <h1>{props.status}</h1>
            <h1>{props.nomeUsuario}</h1>
            <p>
              {props.assunto}
            </p>
            <Link to={`/chamado/${props.id}`}>Ver</Link>
          
        </div>
      </div>
    </div>
  )

}