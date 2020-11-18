import React from 'react';
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor
  return (


    <div className="cardchamado-agente" >
      <div className={cor} >
        <div className="cardchamado-body">
          <div className="cardchamado-descricao">{props.assunto}</div>
          {/* <div className="cardchamado-nivel">{props.status}</div> */}
          <div className="cardchamado-autor">{props.nomeUsuario}</div>
          <div className="cardchamado-estado">{props.status}</div>

        </div>
      </div>
    </div>
  )

}