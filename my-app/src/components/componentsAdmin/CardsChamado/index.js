import React, { useState }from 'react';
import Modal from '../Modal'
import './style.css'

export default function CardChamado(props) {
  let cor = props.cor
  const [isModalVisible, setIsModalVisible] = useState(false);

  function fecharModal() {
    props.onClose();
  }
  
  return (

    <div className="cardchamado-agente" >
      <div className={cor} >
        <div className="cardchamado-body">
          <div className="cardchamado-descricao">{props.assunto}</div>
          <div className="cardchamado-autor">{props.nomeUsuario}</div>
          <div className="cardchamado-estado">{props.status}</div>
          <button onClick={()=> setIsModalVisible(true)}>Ver</button>
            {isModalVisible ? <Modal id={props.id} acao={props.acao} acaoModal={fecharModal} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      </div>
    </div>
  )

}