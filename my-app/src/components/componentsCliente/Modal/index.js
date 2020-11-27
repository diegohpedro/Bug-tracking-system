import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import './style.css'

function Modal(props) {

  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`/chamado/${props.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      const chamado = res.data;
      setAssunto(chamado.assunto);
      setDescricao(chamado.descricao);
      setNome(chamado.usuario.nome);
      setEmail(chamado.usuario.email);

      if(chamado.status === 1) {
        setStatus('Aberto');
      } else if (chamado.status === 2) {
        setStatus('Em progresso');
      } else if (chamado.status === 3) {
        setStatus('Finalizado');
      } else (
        setStatus('Analisando chamado')
      )
    }).catch(err => {
      alert('Houve algum erro na requisição');
    });

  }, [])

  function deletarChamado() {
    if(window.confirm('Deseja deletar o chamado?')){
      api.delete(`/chamado/${props.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        alert('Deletado');
      }).catch(err => {
        alert('Erro ao deletar');
      })
    }
  }

  return (
    <div id='modalCliente' className='modal' >
        <div className="container" id='container-client'>
          <button className='close' onClick={props.onClose}>X</button>
            <div className='content'>
            <label className='categoria-1' id='title' id='assunto'>Assunto</label>
            <h1 className='dados-1' id='assunto'>{assunto}</h1>
            <label className='categoria-1' id='assunto'>Descrição</label>
            <h1 className='dados-1' id='dados-1'>{descricao}</h1>
            
            <label className='categoria-1'>Nome</label>
            <h1 className='dados-1'>{nome}</h1>
            
            <label className='categoria-1'>Email</label>
            <h1 className='dados-1'>{email}</h1>
            
            <label className='categoria-1'>Status</label>
            <h1 className='dados-1'>{status}</h1>
            </div>
            


            <button className='btn-del-1' onClick={deletarChamado}>Deletar Chamado</button>
        </div>
    </div>
  )
}

export default Modal;