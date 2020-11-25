import React, {useState} from 'react';
import ModalUsuario from '../ModalUsuario';

export default function CardUsuario({nome, id}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <div>
            <h1>{nome}</h1>
            <button onClick={()=> setIsModalVisible(true)}>Mais informações</button>
            {isModalVisible 
            ? 
                <ModalUsuario 
                    id={id} 
                    onClose={()=> setIsModalVisible(false)}
                /> 
            : null}
        </div>
    )
}