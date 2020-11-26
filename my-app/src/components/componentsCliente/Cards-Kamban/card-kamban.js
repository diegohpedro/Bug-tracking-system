import React from 'react';
import './style.css'

export default function CardKamban(props) {
  let cor = props.cor
  return (

    
    <div className="card-kamban" >
      <div className={cor} >
        <div className="card-kamban-body">
          <h1>{props.quantidade}</h1>
        </div>
        <div className="card-kamban-footer">
          {props.name}
        </div>
      </div>
    </div>
  )

}