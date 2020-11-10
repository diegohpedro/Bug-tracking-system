import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import './style.css';

export default function NovoChamado() {
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
                            <input type="text" placeholder='Digite o assunto'/>
                        </div>
                        <label>Descrição do chamado</label>
                        <div>
                            <textarea placeholder='Digite aqui a descrição'  />
                        </div>
                    </section>

                    <section className='form-secundario'>
                        <div>
                            <label>Nome para contato</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label>Categoria do bug</label>
                            <select  >
                                <option value="bug-1">bug-1</option>
                                <option value="bug-2">bug-2</option>
                                <option value="bug-3">bug-3</option>
                                <option value="bug-4">bug-4</option>
                            </select>
                        </div>
                        <div className='btn'>
                            <button id='btn-cancelar'>Cancelar</button>
                            <button id='btn-criarchamado'>Criar Chamado</button>
                        </div>
                    </section>

                </form>
            </main>

        </section>
    )
}