import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import './style.css'

function ModalUsuario({ onClose, id, acao}) {
  const history = useHistory();

  const [atualizar, setAtualizar] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState();
  const [dev, setDev] = useState();

  useEffect(() => {
    api.get(`/admin/usuario/${id}`,{
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    }).then(res => {
      const usuario = res.data;
      setNome(usuario.nome);
      setEmail(usuario.email);
      setAdmin(usuario.admin);
      setDev(usuario.dev);
    }).catch(err => {
      alert('Erro na requisição de usuário!');
    });
  }, [atualizar]);

  async function tornarDev() {
      api.patch(`/admin/usuario/${id}`, {}, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      }).then(res => {
        alert('Usuário atualizado');
      }).catch(err => {
        localStorage.clear();
        return history.push('/');
      });

      setAtualizar(prev => prev + 1);
      acao();
    }

    async function removerDev() {
      api.patch(`/admin/usuario/remove/${id}`, {}, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      }).then(res => {
        alert('Usuário atualizado');
      }).catch(err => {
        localStorage.clear();
        return history.push('/');
      });

      setAtualizar(prev => prev + 1);
      acao();
    }
    return (
      <div id='modal' className="modal">
        <div className="container" >
          <button className='close' onClick={onClose}>X</button>
          <div className='content'>
            <div className='coluna'>
            <label>Nome: {nome}</label>
            <label>Email: {email}</label>
            
            {(!admin) && (!dev) ? <label>Usuário comum</label>: null}

            {(admin) || (dev) ? <label>Cargo(s)</label> : null}

            {(admin) ? <label>Administrador(a)</label> : null}
            {(dev) ? <label>Desenvolvedor(a)</label> : null}

            </div>
            {(!dev) ? <button onClick={tornarDev}>Tornar desenvolvedor</button>: <button onClick={removerDev}>Remover desenvolvedor</button>}
          </div>
        </div>
      </div>

    )
}

export default ModalUsuario;