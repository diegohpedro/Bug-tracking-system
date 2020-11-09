import React from 'react';
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor
  return (

    
    <div className="cardchamado" >
      <div className={cor} >
        <div className="cardchamado-body">
            <p>
              Card de Chamado
            </p>
          
        </div>
      </div>
    </div>
  )

}