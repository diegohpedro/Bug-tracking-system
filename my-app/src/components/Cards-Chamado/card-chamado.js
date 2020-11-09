import React from 'react';
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor
  return (

    
    <div className="cardchamado-agente" >
      <div className={cor} >
        <div className="cardchamado-body">
           <div className ="cardchamado-descricao">Descrição</div>
           <div className ="cardchamado-nivel">Nivel</div>
           <div className ="cardchamado-autor">Autor</div>
           <div className ="cardchamado-estado">Estado</div>
          
        </div>
      </div>
    </div>
  )

}