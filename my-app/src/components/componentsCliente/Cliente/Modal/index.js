// import React, { useEffect, useState } from 'react';

// import api from '../../../../services/api';

// import './style.css'

// function Modal(props) {

//   const [assunto, setAssunto] = useState('');
//   const [descricao, setDescricao] = useState('');
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     api.get(`/chamado/${props.id}`, {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     }).then(res => {
//       const chamado = res.data;
//       setAssunto(chamado.assunto);
//       setDescricao(chamado.descricao);
//       setNome(chamado.usuario.nome);
//       setEmail(chamado.usuario.email);

//       if(chamado.status === 1) {
//         setStatus('Aberto');
//       } else if (chamado.status === 2) {
//         setStatus('Em progresso');
//       } else if (chamado.status === 3) {
//         setStatus('Finalizado');
//       } else (
//         setStatus('Analisando chamado')
//       )
//     }).catch(err => {
//       alert('Houve algum erro na requisição');
//     });

//   }, [])

//   function deletarChamado() {
//     if(window.confirm('Deseja deletar o chamado?')){
//       api.delete(`/chamado/${props.id}`, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       }).then(res => {
//         alert('Deletado');
//       }).catch(err => {
//         alert('Erro ao deletar');
//       })
//     }
//   }

//   return (
//     <div id='modal' className="modal">
//       <div className="container" >
//         <button className='close' onClick={props.onClose}>X</button>
//         <div className='content'>
//             <label className='categoria' id='title'>Assunto</label>
//             <h1 className='dados' id='assunto'>{assunto}</h1>
//             <label className='categoria' id='desc'>Descrição</label>
//             <h1 className='dados' id='dados'>{descricao}</h1>
//             <label className='categoria'>Nome</label>
//             <h1 className='dados'>{nome}</h1>
//             <label className='categoria'>Email</label>
//             <h1 className='dados'>{email}</h1>
//             <label className='categoria'>Status</label>
//             <h1 className='dados'>{status}</h1>

//           <button className='btn-del' onClick={deletarChamado}>Deletar Chamado</button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal;

import React, { useEffect, useState } from 'react';

import api from '../../../../services/api';

import './style.css'

function Modal(props) {

  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`/chamado/${props.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      const chamado = res.data;
      setAssunto(chamado.assunto);
      setDescricao(chamado.descricao);
      setNome(chamado.usuario.nome);
      setEmail(chamado.usuario.email);

      if(chamado.status === 1) {
        setStatus('Aberto');
      } else if (chamado.status === 2) {
        setStatus('Em progresso');
      } else if (chamado.status === 3) {
        setStatus('Finalizado');
      } else (
        setStatus('Analisando chamado')
      )
    }).catch(err => {
      alert('Houve algum erro na requisição');
    });

  }, [])

  function deletarChamado() {
    if(window.confirm('Deseja deletar o chamado?')){
      api.delete(`/chamado/${props.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        alert('Deletado');
      }).catch(err => {
        alert('Erro ao deletar');
      })
    }
  }

  return (
    // <div id='modal' className="modal">
      <div className="container" >
        <button className='close' onClick={props.onClose}>X</button>
        
            <label className='categoria' id='title'>Assunto</label>
            <h1 className='dados' id='assunto'>{assunto}</h1>
            <label className='categoria' id='desc'>Descrição</label>
            <h1 className='dados' id='dados'>{descricao}</h1>
            
        
            <label className='categoria'>Nome</label>
            <h1 className='dados'>{nome}</h1>
            
            <label className='categoria'>Email</label>
            <h1 className='dados'>{email}</h1>
            
            <label className='categoria'>Status</label>
            <h1 className='dados'>{status}</h1>


          <button className='btn-del' onClick={deletarChamado}>Deletar Chamado</button>
      </div>
    // </div>
  )
}

export default Modal;