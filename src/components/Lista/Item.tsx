import React from 'react'

type PropsLista = {
    children:React.ReactNode;
    removerTarefa: (indice: number) => void;
    index:number
}

const Item = ({ children, removerTarefa,index}:PropsLista ) => {
    
    return (
        <li>
            {children}
            <button onClick={() => removerTarefa(index)}>❌</button>
        </li>
    )
}

export default Item
