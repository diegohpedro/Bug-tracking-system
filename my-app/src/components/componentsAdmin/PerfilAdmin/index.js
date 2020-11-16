import React from 'react';
import Sidebar from '../Sidebar';
import ConteudoHeader from '../ConteudoHeader';
import FotoPerfil from '../../Img/perfilsemfoto.jpg';
import './style.css'

export default function PerfilAdmin() {
    return(
        <section id='conteudo'>
            <Sidebar />
            <main>
                <section>
                    <ConteudoHeader
                        titulo='Meu perfil'
                        descricao='Página para ver e editar perfil.'
                    />
                </section>

                <section className='perfil'>
                    <div >
                    <div>
                        <img src={FotoPerfil}/>                        
                        <button className='editarImagem'>Editar</button>
                    </div>
                    <div>
                        <label>Nome: </label>
                        <input /><button>Editar</button>
                    </div>
                    <div>
                        <label>Telefone: </label>
                        <input />
                        <button>Editar</button>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input />
                        <button>Editar</button>
                    </div>
                    <div>
                        <label>Senha: </label>
                        <input />
                        <button>Editar</button>
                    </div>
                    
                    </div>
                </section>

            </main>

        </section>
    )
}