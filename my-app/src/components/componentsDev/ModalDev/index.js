import React, { useEffect, useState } from 'react';
// ../../../services/api
import api from '../../../services/api';

// import './style.css'

function ModalDev(props) {
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
      console.log(err)
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
            <h1>aqui fica o assunto</h1>
            
            <label>Descrição</label>
            <h1>Aqui fica a descrição</h1>
            
          </div>
          <div className='coluna'>
            <label>Autor</label>
            <h1>Nome do Autor</h1>
            <label>Responsavel</label>
            <h1>Nome Responsavel</h1>
            <label>Status</label>
            <h1>{verificarStatus()}</h1>
          </div>
  

        </div>
      </div>
    </div>

  )
}

export default ModalDev;