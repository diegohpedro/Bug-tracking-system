import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import './style.css'

function ModalProjeto(props) {
  const history = useHistory();
  const [atualizar, setAtualizar] = useState(0);
  const [orientacoesTarefa, setOrientacoesTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    api.get('/admin/usuarios', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      setUsuarios(res.data.filter(usuario => usuario.dev === true));

    }).catch(err => {
      localStorage.clear();
      return history.push('/');
    });
  }, [atualizar]);

  function adicionarTarefa() {
    const dev = document.getElementById('devs');
    const idDev = dev.value; 
    const nomeDev = dev.children[dev.selectedIndex].textContent;

    const tarefa = {
      descricao: descricaoTarefa,
      nomeResponsavel: nomeDev,
      responsavel: idDev
    }

    tarefas.push(tarefa);

    setDescricaoTarefa('');

    setAtualizar(prev => prev + 1);
  }

  async function montarProjeto() {

    const tarefasFormatadas = tarefas.map( tarefa => {
      return {descricao: tarefa.descricao, responsavel: tarefa.responsavel}
    });

    const body = {
      assunto: props.assunto,
      descricao: props.descricao,
      orientacoes: orientacoesTarefa,
      chamado: props.id,
      tarefas: tarefasFormatadas
    }

    console.log(body);

    api.post('/admin/novoprojeto', body, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      alert('Projeto criado');
      setAtualizar(prev => prev + 1);
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
  
            <label>Assunto</label>
            <h1>{props.assunto}</h1>

            <label>Descrição</label>
            <h1>{props.descricao}</h1>

          </div>
          <div className='coluna'>

            <label htmlfor='info'>Orientações</label>
            <textarea 
              name='info' 
              value={orientacoesTarefa} 
              placeholder='Descreva aqui as informações, objetivos e observações do projeto.'
              onChange = {event => setOrientacoesTarefa(event.target.value)} 
            />

            <h1>Tarefas</h1>

            {tarefas.map(tarefa => {
              return <p key={tarefas.responsavel}>{tarefa.descricao} {tarefa.nomeResponsavel}</p>
            })}

            <div>
              <input 
                placeholder='Descreva a tarefa.'
                value = {descricaoTarefa}
                onChange = {event => setDescricaoTarefa(event.target.value)}
              />

              <select name="devs" id='devs'>
                <option value='0'>Selecione um desenvolvedor</option>
                {usuarios.map(usuario => {return <option value={usuario._id}>{usuario.nome}</option>})}
              </select>
            </div>

            <button onClick={adicionarTarefa}>Adicionar</button>

          </div>

          <button onClick={montarProjeto}>Montar</button>

        </div>
      </div>
    </div>

  )
}

export default ModalProjeto;