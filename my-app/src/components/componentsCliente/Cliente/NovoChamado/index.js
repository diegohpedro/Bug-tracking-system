// import React, {useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
// import Sidebar from '../Sidebar';
// import ConteudoHeader from '../ConteudoHeader';

// import api from "../../../../services/api";

// import './style.css';

// export default function NovoChamado(props) {
//     const history = useHistory();
//     const [usuarioId, setUsuarioId] = useState('');
//     const [assunto, setAssunto] = useState('');
//     const [descricao, setDescricao] = useState('');

//     useEffect(() => {
//         api.get('/autenticar', {
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('token')}`
//                 }
//         }).then(res => {
//             setUsuarioId(res.data);
//         }).catch(err => {
//             return history.push('/');
//         });
//     }, []);

//     async function submeter(event) {
//         event.preventDefault();
        
//         const body = {
//             assunto,
//             descricao
//         }

//         await api.post('/novochamado', body, {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             }});

//         alert('Chamado criado');
//         setAssunto('');
//         setDescricao('');
//     }


//     return (
//         <section id='conteudo'>
//             <Sidebar />
//             <main>
//                 <section className='chamado'>
//                     <ConteudoHeader
//                         titulo='Novo chamado'
//                         descricao='Painel para abertura de chamado.'
//                     />
//                 </section>
//                 <form method='post' action="mailto:fabiopegoraro10@gmail.com" className='formulario' >

//                     <section className='form-principal' >
//                         <div >
//                             <label>Assunto do chamado</label>
//                             <input type="text" value={assunto} onChange={event => setAssunto(event.target.value)} placeholder='Digite o assunto'/>
//                         </div>
//                         <label>Descrição do chamado</label>
//                         <div>
//                             <textarea value={descricao} onChange={event => setDescricao(event.target.value)} placeholder='Digite aqui a descrição'  />
//                         </div>
//                     </section>

//                     <section className='form-secundario'>
//                         <div className='btn'>
//                             <button id='btn-criarchamado' type='submit' onClick={submeter}>Criar Chamado</button>
//                             <button id='btn-cancelar'>Cancelar</button>
//                         </div>
//                     </section>

//                 </form>
//             </main>

//         </section>
//     )
// }


import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import api from "../../../../services/api";

import './style.css';

export default function NovoChamado() {
    const history = useHistory();
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');

    async function submeter(event) {
        event.preventDefault();
        
        const body = {
            assunto,
            descricao
        }

        await api.post('/novochamado', body, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }});

        alert('Chamado Criado');
        setAssunto('');
        setDescricao('');
    }


    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <section>
                    <ConteudoHeader
                        titulo='Novo chamado'
                        descricao='Painel para abertura de chamado.'
                    />
                </section>
                <form method='post' action="mailto:fabiopegoraro10@gmail.com" className='formulario' >

                    <section className='form-principal'>
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