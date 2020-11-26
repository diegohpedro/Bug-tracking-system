import React, { useState } from 'react';
import './style.css'
import Modal from '../Modal'


export default function CardChamado(props) {
  let cor = props.cor
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="cardchamado">
      <div className={cor} >
        <div className="cardchamado-body">
            <h1>{props.status}</h1>
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