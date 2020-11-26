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
    this.calcularTarefasCompletas();
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
    if(this.state.projeto.status != 1)
      return alert('Projeto já está em análise');
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

    if(tarefasCompletas === this.state.tarefas.length || tarefasCompletas === 0){
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
  
                <h1>Orientações:</h1>
                <p>{this.state.projeto.orientacoes}</p>
              </div>
  
              <div className='container-tarefas'>
  
                {this.state.tarefas.map((tarefa, index) => {
                    return <div className='card-tarefa' key={index}>
                          <h1>{tarefa.descricao} <input type='checkbox' id={tarefa._id} checked={tarefa.completo} onClick={this.clickInput} /></h1>
  
                          <p>Desenvolvedor responsável: {tarefa.responsavel.nome}</p>
                        </div>
                   
                  })}
                
              </div>

              {this.props.status === 2? <div>
                <h1>Aguardando análise</h1>
              </div> : null}

              {this.props.status === 3? <div>
                <h1>Projeto finalizado</h1>
              </div> : null}

              {this.state.projeto.status === 1 
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