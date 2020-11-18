import React, { useEffect, useState } from 'react';

import './style.css'

const Modal = ({ onClose = () => { } }, props) => {



  return (
    <div className="modal">
      <div className="container" >
        <button className='close' onClick={onClose}>X</button>
        <div className='content'>
          <div className='coluna'>
            <label>Assunto</label>
            <input className='assuntoModal' />
            <label>Descrição</label>
            <input className='descricaoModal' />
          </div>
          <div className='coluna'>
            <label>Nome</label>
            <input className='nameModal' />
            <label>Email</label>
            <input className='emailModal' />
            <label>Status</label>
            <input className='statusModal' />
            
          </div>



        </div>
      </div>
    </div>

  )
}

export default Modal;