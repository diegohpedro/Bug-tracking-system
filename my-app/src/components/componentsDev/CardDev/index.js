import React, { useState }from 'react';
import ModalDev from '../ModalDev'
import './style.css'

export default function CardDev(props) {
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (

    <div className="card-dev" >
      <div className={"Status"} >
        <div className="card-dev-body">
          <div className="card-dev-assunto">{props.assunto} Aqui vai ficar o Assunto</div>
          <div className="card-dev-descricao">{props.descricao} Aqui vai ficar a descrição</div>
          <div className="card-dev-autor">{props.nomeUsuario}</div>
          <div className="card-dev-tarefa">Tarefa {"1/3"}</div>
          <button onClick={()=> setIsModalVisible(true)} className="btn-ver">Ver</button>
            {isModalVisible ? <ModalDev id={props.id} onClose={()=> setIsModalVisible(false)}/> : null}
        </div>
      </div>
    </div>
  )

}