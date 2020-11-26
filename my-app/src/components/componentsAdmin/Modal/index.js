import React, { useEffect, useState } from 'react';
import ModalNovoProjeto from '../ModalNovoProjeto';

import api from '../../../services/api';

import './style.css'

function Modal(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`/admin/chamado/${props.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      const chamado = res.data;
      setAssunto(chamado.assunto);
      setDescricao(chamado.descricao);
      setNome(chamado.usuario.nome);
      setEmail(chamado.usuario.email);
      setStatus(chamado.status);
    }).catch(err => {
      alert('Houve algum erro na requisição');
    });

  }, []);

  function verificarStatus() {
    if(status === 1) {
      return <h1>Aberto</h1>
    } else if (status === 2) {
      return <h1>Em progresso</h1>
    } else if (status === 3) {
      return <h1>Finalizado</h1>
    }
  }

  function deletarChamado() {
    if(window.confirm('Deseja deletar o chamado?')){
      api.delete(`/chamado/${props.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      }).then(res => {
        alert('Deletado');
        props.acao();
      }).catch(err => {
        alert('Erro ao deletar');
      })
    }
  }

  return (
    <div id='modal' className="modal">
      <div className="container" >
        <button className='close' onClick={props.onClose}>X</button>
        <div className='content'>
          <div className='coluna'>
            <label>Assunto</label>
            <h1>{assunto}</h1>
            <label>Descrição</label>
            <h1>{descricao}</h1>
            
          </div>
          <div className='coluna'>
            <label>Nome</label>
            <h1>{nome}</h1>
            
            <label>Email</label>
            <h1>{email}</h1>
            
            <label>Status</label>
            <h1>{verificarStatus()}</h1>
          </div>

          {status === 1 ? <button onClick={deletarChamado}>Deletar chamado</button> : null}
          
          {status === 1
            ? <button onClick={()=> setIsModalVisible(true)}>Montar projeto</button>
            : null}

            {isModalVisible ? <ModalNovoProjeto id={props.id} acao={props.acao} acaoModal={props.acaoModal} nome={nome} assunto={assunto} descricao={descricao} onClose={()=> setIsModalVisible(false)}/> : null}

        </div>
      </div>
    </div>

  )
}

export default Modal;