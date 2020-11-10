import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import './style.css';

export default function NovoChamado() {
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [categoria, setCategoria] = useState('');

    function submeter(event) {
        event.preventDefault();

        console.log('Assunto: ', assunto);
        console.log('descricao: ', descricao);
        console.log('nome: ', nome);
        console.log('email: ', email);
        console.log('telefone: ', telefone);
        console.log('telefone: ', telefone);
        console.log('categoria: ', categoria);
    }


    return (
        <section id='novo-chamado'>
            <Sidebar />
            <main>
                <section>
                    <ConteudoHeader
                        titulo='Novo chamado'
                        descricao='Painel para abertura de chamado.'
                    />
                </section>
                <form method='post' action="mailto:fabiopegoraro10@gmail.com" className='formulario' >

                    <section className='form-principal' >
                        <div >
                            <label>Assunto do chamado</label>
                            <input type="text" value={assunto} onChange={event => setAssunto(event.target.value)} placeholder='Digite o assunto'/>
                        </div>
                        <label>Descrição do chamado</label>
                        <div>
                            <textarea value={descricao} onChange={event => setDescricao(event.target.value)} placeholder='Digite aqui a descrição'  />
                        </div>
                    </section>

                    <section className='form-secundario'>
                        <div>
                            <label>Nome para contato</label>
                            <input value={nome} onChange={event => setNome(event.target.value)}type="text" />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input value={email} onChange={event => setEmail(event.target.value)}type="email" />
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input value={telefone} onChange={event => setTelefone(event.target.value)}type="number" />
                        </div>
                        <div>
                            <label>Categoria do bug</label>
                            <select value={categoria} onChange={event => setCategoria(event.target.value)} >
                                <option value="bug-1">bug-1</option>
                                <option value="bug-2">bug-2</option>
                                <option value="bug-3">bug-3</option>
                                <option value="bug-4">bug-4</option>
                            </select>
                        </div>
                        <div className='btn'>
                            <button id='btn-cancelar'>Cancelar</button>
                            <button id='btn-criarchamado' type='submit' onClick={submeter}>Criar Chamado</button>
                        </div>
                    </section>

                </form>
            </main>

        </section>
    )
}