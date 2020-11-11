import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';

import api from '../../../services/api';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('');

    async function submeter(event) {
        event.preventDefault();

        const body = {
            nome,
            senha,
            email,
            tipo
        }

        await api.post('/admin/cadastro', body);

        alert('Usuário criado!');
    }

    return (
        <section id='conteudo'>
            <Sidebar />
            <main>
                <ConteudoHeader
                    titulo='Cadastro'
                    descricao='Cadastro de usuários.'
                />
                <form onSubmit={submeter} method='POST'>
                    <label htmlFor='nome'>Nome</label>
                    <input type='text' name='nome' value={nome} onChange={event => setNome(event.target.value)} required />

                    <label htmlFor='email'>Email</label>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} required />

                    <label htmlFor='senha'>Senha</label>
                    <input type='password' name='senha' value={senha} onChange={event => setSenha(event.target.value)} required />

                    <label htmlFor='tipo'>Tipo de usuário</label>
                    <select name='tipo' value={tipo} onChange={event => setTipo(event.target.value)} required >
                        <option select='true' value="1">Comum</option>
                        <option value="2">Dono de empresa</option>
                        <option value="3">Desenvolvedor comum</option>
                        <option value="4">Desenvolvedor administrador</option>
                    </select>
                    <button type='submit'>Criar</button>

                </form>
            </main>


        </section>
    )
}