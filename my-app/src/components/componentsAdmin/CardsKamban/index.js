import React from 'react';


export default function CardKamban(props) {
  let cor = props.cor
  return (

    
    <div className="card-kamban" >
      <div className={cor} >
        <div className="card-kamban-body">
          {props.value}
          
        </div>
        <div className="card-kamban-footer">
          {props.name}
        </div>
      </div>
    </div>
  )

}