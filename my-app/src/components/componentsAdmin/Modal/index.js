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
      <div className="container" className="cont-2">
        <button className='close' onClick={props.onClose}>X</button>
        <div className='content'>
          {/* <div className='coluna'> */}
            <label className='categoria'>Assunto</label>
            <h1 className='dados'>{assunto}</h1>
            <label className='categoria'>Descrição</label>
            <h1 className='dados'>{descricao}</h1>
            
            <label className='categoria'>Nome</label>
            <h1 className='dados'>{nome}</h1>
            
            <label className='categoria'>Email</label>
            <h1 className='dados'>{email}</h1>
            
            <label className='categoria'>Status</label>
            <h1 className='dados'>{verificarStatus()}</h1>

          {status === 1 ? <button onClick={deletarChamado} className='btn-del'>Deletar chamado</button> : null}
          
          {status === 1
            ? <button onClick={()=> setIsModalVisible(true)} className='btn-proejeto'>Montar projeto</button>
            : null}

            {isModalVisible ? <ModalNovoProjeto id={props.id} acao={props.acao} acaoModal={props.acaoModal} nome={nome} assunto={assunto} descricao={descricao} onClose={()=> setIsModalVisible(false)}/> : null}

        </div>
      </div>
  )
}

export default Modal;