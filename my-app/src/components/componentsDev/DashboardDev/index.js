import React, { Component } from 'react';
import {Redirect} from 'react-router';
import SidebarDev from '../Sidebar';
import CardDev from '../CardDev';

import api from '../../../services/api';

import './style.css';

class DashboardDev extends Component {
    constructor(props){
        super(props);
        this.state = {projetos: []};
    }

    componentDidMount = () => {
        this.requisitarProjetos();
    }

    requisitarProjetos = () => {
        api.get('/dev/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('devToken')}`
            }
        }).then(res => {
            this.setState({projetos: res.data});
        }).catch(err => {
            localStorage.clear();

            return <Redirect to="/dev/login" />
        });
    }

    render() {
        return (
                <section id='conteudo'>
                    <SidebarDev />
                    <main className='container-main'>
                        <h1>Projetos</h1>
                        <div className='container-projetos'>
                            <section className='row-card'>
                                <h1>Em andamento</h1>
                                {this.state.projetos.map((projeto, index) => {
                                    if(projeto.status === 1) {
                                        return <CardDev acao={this.requisitarProjetos} key={index} assunto={projeto.assunto} descricao={projeto.descricao} nomeUsuario={projeto.usuario.nome} id={projeto._id} tarefas={projeto.tarefas}/>
                                    }
                                })}
                            </section>
    
                            <section className='row-card'>
                                <h1>Em análise</h1>
                                {this.state.projetos.map((projeto, index) => {
                                    if(projeto.status === 2) {
                                        return <CardDev key={index} status={projeto.status} acao={this.requisitarProjetos} assunto={projeto.assunto} descricao={projeto.descricao} nomeUsuario={projeto.usuario.nome} id={projeto._id} tarefas={projeto.tarefas}/>
                                    }
                                })}
                            </section>
    
                            <section className='row-card'>
                                <h1>Finalizados</h1>
                                {this.state.projetos.map((projeto, index) => {
                                    if(projeto.status === 3) {
                                        return <CardDev key={index} status={projeto.status} acao={this.requisitarProjetos} assunto={projeto.assunto} descricao={projeto.descricao} nomeUsuario={projeto.usuario.nome} id={projeto._id} tarefas={projeto.tarefas}/>
                                    }
                                })}
                            </section>
                        </div>
                    </main>
    
                </section>
        )

    }
}

export default DashboardDev;