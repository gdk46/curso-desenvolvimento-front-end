import React from 'react';

import Produto from '../data/produtos';

export default props => {
    function getListaProduto(){
        
        return Produto.map(pord => {
            return (
                <li key={pord.id}>
                    {pord.id} - {pord.nome} - R$: {pord.preco}
                </li>
            )
        })
    }


    return (
        <div>
            <h2>
                Repetição
            </h2>
            <ul>
                {getListaProduto()}                
            </ul>
        </div>
    )
}