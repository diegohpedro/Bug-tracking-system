import React, { useState } from 'react';
import './style.css'
import Modal from '../Modal'


export default function CardChamado(props) {
  let cor = props.cor
  const [isModalVisible, setIsModalVisible] = useState(false);

  function formatarStatus(status) {
    if(status === 1) {
      return 'Aberto'
    } else if (status === 2) {
      return 'Em progresso'
    } else if (status === 3 ) {
      return 'Finalizado'
    }
  }

  return (
    <div className="cardchamado">
      <div className={cor} >
        <div className="cardchamado-body">
            <h1>{formatarStatus(props.status)}</h1>
            <h1>{props.nomeUsuario}</h1>
            <p>
              {props.assunto}
            </p>
            <button className='btn-ver' onClick={()=> setIsModalVisible(true)}>Ver</button>
            {isModalVisible ? <Modal id={props.id} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      
      </div>
    </div>
  )

}