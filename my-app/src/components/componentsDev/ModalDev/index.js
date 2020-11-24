import React, { useEffect, useState } from 'react';
import CardTarefa from '../CardTarefa';
import api from '../../../services/api';

// import './style.css'

function ModalDev(props) {

  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [tarefasCompletas, setTarefasCompletas] = useState();
  
  useEffect(() => {
    requisitarProjeto();
    verificarTarefas(tarefas);
  }, [tarefasCompletas]);

  function verificarTarefas(tarefas) {
    let tarefasCompletas = 0;

    tarefas.forEach(tarefa => {
      if(tarefa.completo) tarefasCompletas++;
    });
    setTarefasCompletas(tarefasCompletas);
    
  }

  function requisitarProjeto() {
    api.get(`/dev/projeto/${props.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      const {data} = res
      setAssunto(data.assunto);
      setDescricao(data.descricao);
      setNome(data.usuario.nome);
      setTarefas(data.tarefas);
    }).catch(err => {
      console.log(err);
    });
  }

  function mandarParaAnalise() {
    api.put(`/dev/projeto/${props.id}`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      alert('Projeto em análise!');
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div id='modal' className="modal">
      <div className="container" >
        <button className='close' onClick={props.onClose}>X</button>
        <div className='content'>
          <div className='coluna'>
            <h1>Assunto: </h1>
            <p>{assunto}</p>

            <h1>Descrição: </h1>
            <p>{descricao}</p>

          </div>

          <div className='containet-tarefas'>
            {tarefas.map((tarefa, index) => {
              return <CardTarefa key={index} id={tarefa._id}/>
            })}
          </div>

          <div className='coluna'>
            <h1>Chamado feito por: </h1>
            <p>{nome}</p>
            <h1>Responsavel: </h1>
            <p>Nome do admin responsavel pelo projeto</p>

            {(tarefasCompletas === tarefas.length)? <button onClick={mandarParaAnalise}>Mandar para análise</button>: null }

          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalDev;