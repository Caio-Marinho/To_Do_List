import React from 'react';
import style from './Lista.module.css'

type PropsLista = {
    children: React.ReactNode;
    removerTarefa: (indice: string) => void;
    alternarSelecionado: (id: string) => void;
    index: string
    selecionado: boolean;
    titulo:string
}

const Item = ({ children, removerTarefa, index,selecionado,titulo,alternarSelecionado }: PropsLista) => {

    return (
        <li>
            <input type="checkbox" checked={selecionado} onChange={() => alternarSelecionado(index)} title={titulo} />
            <span className={style.textoAtividade}>{children}</span>
            <button className={style.botaoAcao} type="button" onClick={() => removerTarefa(index)}>❌</button>
        </li>
    )
}

export default Item
