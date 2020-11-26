import React, { useState }from 'react';
import Modal from '../Modal'
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (
    <div className="cardchamado-agente" >
      <div className={cor} >
        <div className="cardchamado-body">
          <div className="cardchamado-descricao">{props.assunto}</div>
          {/* <div className="cardchamado-nivel">{props.status}</div> */}
          <div className="cardchamado-autor">{props.nomeUsuario}</div>
          <div className="cardchamado-estado">{props.status}</div>
          <button onClick={()=> setIsModalVisible(true)} className='btn-ver'>Ver</button>
            {isModalVisible ? <Modal id={props.id} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      </div>
    </div>
  )
}