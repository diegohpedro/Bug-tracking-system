import React, { Component } from 'react';
import CardProjeto from '../CardProjeto';
import {Redirect} from 'react-router';
import Sidebar from '../Sidebar';

import api from '../../../services/api';

class Projetos extends Component {
    constructor(props){
        super(props);
        this.state = {projetos: []};
    }

    componentDidMount = () => {
        this.requisitarProjetos();
    }

    requisitarProjetos = () => {
        api.get('/admin/projetos', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        }).then(res => {
            this.setState({projetos: res.data});
        }).catch(err => {
            localStorage.clear();

            return <Redirect to="/" />
        });
    }

    render() {

        return (
            <section id='conteudo'>
                <Sidebar />
                <main className='container-main'>
                    <h1>Projetos</h1>
                    <div className='container-projetos'>
                        <section className='row-card'>
                            <h1>Aguardando análise</h1>
                            {this.state.projetos.map((projeto, index) => {
                                if(projeto.status === 2) {
                                    return <CardProjeto key={index} acao={this.requisitarProjetos} id={projeto._id} descricao={projeto.descricao} status={projeto.status} nomeUsuario={projeto.usuario.nome} assunto={projeto.assunto} />
                                }
                            })}
                        </section>

                        <section className='row-card'>
                            <h1>Finalizados</h1>
                            {this.state.projetos.map((projeto, index) => {
                                if(projeto.status === 3) {
                                    return <CardProjeto key={index} acao={this.requisitarProjetos} id={projeto._id} descricao={projeto.descricao} status={projeto.status} nomeUsuario={projeto.usuario.nome} assunto={projeto.assunto} />
                                }
                            })}
                        </section>
                    </div>
                </main>

            </section>
        )
    }

}

export default Projetos;