import React, { useState}from 'react';
import ModalDev from '../ModalDev'

import './style.css'

export default function CardDev({assunto, descricao, nomeUsuario, id, tarefas, acao, status}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (

    <div className="card-dev" >
      <div className={"Status"} >
        <div className="card-dev-body">
          <div className="card-dev-assunto">{assunto}</div>
          <div className="card-dev-descricao">{descricao}</div>
          <div className="card-dev-autor">{nomeUsuario}</div>
          <div className="card-dev-tarefa">Tarefas: {tarefas.length}</div>
          <button id="botao-enviar" onClick={()=> setIsModalVisible(true)} className="btn-ver">Ver</button>
            {isModalVisible ? <ModalDev acao={acao} id={id} status={status} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      </div>
    </div>
  )

}