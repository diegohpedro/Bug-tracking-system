import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor

  return (
    <div className="cardchamado">
      <div className={cor} >
        <div className="cardchamado-body">
            <p>
              {props.assunto}
            </p>
            <Link to={`/tarefa/${props.id}`}>Ver</Link>
          
        </div>
      </div>
    </div>
  )

}