import React, { Component } from 'react';
import { Redirect } from 'react-router'
import api from '../../../services/api';

import './style.css';

class ModalProjeto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projeto: {},
      tarefas: [],
      tarefasCompletas: false,
      redirect: false
    };
  }

  componentDidMount = () => {
    this.requisitarProjeto();
  }

  requisitarProjeto = () => {
    api.get(`/admin/projeto/${this.props.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      this.setState({ 
        projeto: res.data.projeto,
        tarefas: res.data.tarefas
        });
    }).catch(err => {
      console.log(err);
    });
  }

  finalizarProjeto = () => {
    api.put(`/admin/projeto/finalizar/${this.props.id}`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      alert('Projeto finalizado!');
      this.props.acao();
    }).catch(err => {
      console.log(err);
    });
  }

  recusarProjeto = () => {
    api.put(`/admin/projeto/recusar/${this.props.id}`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      alert('Projeto recusado!');
      this.props.acao();
    }).catch(err => {
      console.log(err);
    });
  }

  render() {

    if(this.state.redirect) {
      return <Redirect to="/admin/projetos" />
    } else {
      return (
        <div id='adminModalProjeto' className="modal">
          <div className="container" >
            <button className='close' onClick={this.props.onClose}>X</button>
            <div className='content'>
              <div className='coluna'>
                <h1>Assunto: </h1>
                <p>{this.state.projeto.assunto}</p>
  
                <h1>Descrição: </h1>
                <p>{this.state.projeto.descricao}</p>

                <h1>Orientações: </h1>
                <p>{this.state.projeto.orientacoes}</p>
  
              </div>
  
              <div className='container-tarefas'>
                <h1>Tarefas concluídas</h1>
                {this.state.tarefas.map((tarefa, index) => {
                  return <div key={index}>
                    <p>{tarefa.descricao} | {tarefa.responsavel.nome} </p>
                  </div>
                })}
                
              </div>
              
              {this.props.status === 3? null:
                <div className='conteinar-buttons'>
                  <button onClick={this.recusarProjeto} >Recusar projeto</button>
                  <button onClick={this.finalizarProjeto}>Finalizar projeto</button>
                </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ModalProjeto;