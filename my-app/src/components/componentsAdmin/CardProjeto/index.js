import React, { useState}from 'react';
import ModalProjeto from '../ModalProjeto'

import './style.css'

export default function CardProjeto({assunto, descricao, nomeUsuario, id, acao, status}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (

    <div className="card-dev" >
      <div className={"Status"} >
        <div className="card-dev-body">
          <div className="card-dev-assunto">{assunto}</div>
          <div className="card-dev-descricao">{descricao}</div>
          <div className="card-dev-autor">{nomeUsuario}</div>
          <button onClick={()=> setIsModalVisible(true)} className="btn-ver">Analisar</button>
            {isModalVisible ? <ModalProjeto acao={acao} id={id} status={status} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      </div>
    </div>
  )

}