import React, { Component } from 'react';
import { Redirect } from 'react-router'
import api from '../../../services/api';

class ModalDev extends Component {
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
    api.get(`/dev/projeto/${this.props.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('devToken')}`
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

  clickInput = (e) => {
    const {id} = e.target;
    api.put(`/dev/tarefa/${id}`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('devToken')}`
      }
    }).then(res => { 
    this.requisitarProjeto();
    this.calcularTarefasCompletas();
    }).catch(err => {
      console.log(err);
    });
  }

  mandarParaAnalise = () => {
    api.put(`/dev/projeto/${this.state.projeto._id}`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('devToken')}`
      }
    }).then(res => {
      this.setState({
        redirect: true
      });
      this.props.acao();
    }).catch(err => {
      console.log(err);
    });
  }

  calcularTarefasCompletas = () => {
    let tarefasCompletas = 0;
    this.state.tarefas.forEach(tarefa => {
      if(tarefa.completo) {
        tarefasCompletas++;
      }
    });

    if(tarefasCompletas === this.state.tarefas.length){
      this.setState({tarefasCompletas: true});
    } else {
      this.setState({tarefasCompletas: false});
    }
  }

  render() {

    if(this.state.redirect) {
      return <Redirect to="/dev/dashboard" />
    } else {
      return (
        <div id='modal' className="modal">
          <div className="container" >
            <button className='close' onClick={this.props.onClose}>X</button>
            <div className='content'>
              <div className='coluna'>
                <h1>Assunto: </h1>
                <p>{this.state.projeto.assunto}</p>
  
                <h1>Descrição: </h1>
                <p>{this.state.projeto.descricao}</p>
  
              </div>
  
              <div className='container-tarefas'>
  
                {this.state.tarefas.map((tarefa, index) => {
                  if(this.props.status === 1) {
                    return <div className='card-tarefa'>
                          <h1>{tarefa.descricao} <input type='checkbox' id={tarefa._id} checked={tarefa.completo} onClick={this.clickInput} /></h1>
  
                          <p>Desenvolvedor responsável: {tarefa.responsavel.nome}</p>
                        </div>
                  } else {
                   return <div className='card-tarefa'>
                          <h1>{tarefa.descricao} <input type='checkbox' id={tarefa._id} checked={tarefa.completo}/></h1>
  
                          <p>Desenvolvedor responsável: {tarefa.responsavel.nome}</p>
                        </div>
                  }
                  })}
                
              </div>
  
              <div className='coluna'>
                <h1>Chamado feito por: </h1>
                <p>{this.state.projeto.nome}</p>
              </div>

              {this.props.status === 2? <div>
                <h1>Aguardando análise</h1>
              </div> : null}

              {this.props.status === 3? <div>
                <h1>Projeto finalizado</h1>
              </div> : null}

              {!this.props.status === 2 
                ? !this.state.tarefasCompletas 
                  ? <button onClick={this.mandarParaAnalise}>Mandar para análise</button>
                  : null 
                : null }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ModalDev;