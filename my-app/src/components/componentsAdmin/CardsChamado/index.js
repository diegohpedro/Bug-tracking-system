import React, { useState }from 'react';
import Modal from '../Modal'
import './style.css'

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
    <div className="cardchamado-agente" >
      <div className={cor} >
        <div className="cardchamado-body">
          <div className="cardchamado-descricao">{props.assunto}</div>
          <div className="cardchamado-autor">{props.nomeUsuario}</div>
          <div className="cardchamado-estado">{formatarStatus(props.status)}</div>
          <button onClick={()=> setIsModalVisible(true)} className='btn-ver'>Ver</button>
            {isModalVisible ? <Modal id={props.id} acao={props.acao} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      </div>
    </div>
  )
}