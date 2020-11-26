import React, {useState} from 'react';
import ModalUsuario from '../ModalUsuario';
import './style.css';

export default function CardUsuario({nome, id, acao, admin, dev}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <div className='adm'>
            <h1>{nome}</h1>
            {/* {(!admin) && (!dev) ? <p>Comum</p>: null} */}
            {/* {dev ? <p>Dev</p>: null} */}
            {/* {admin? <p>Admin</p>: null} */}
            <button onClick={()=> setIsModalVisible(true)}>Mais informações</button>
            {isModalVisible 
            ? 
                <ModalUsuario 
                    id={id}
                    acao={acao} 
                    onClose={()=> setIsModalVisible(false)}
                /> 
            : null}
        </div>
    )
}