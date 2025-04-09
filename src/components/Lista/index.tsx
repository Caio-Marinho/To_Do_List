import React from 'react'
import CorpoLista from './corpoLista'
import Item from './Item'

type PropsLista = {
    Lista: string[];
    remover: (indice: number) => void;
}

const ListaItem = ({Lista,remover}:PropsLista) => {
  return (
    <CorpoLista>
      {Lista.map((item: string,index:number) => <Item removerTarefa={() => remover(index)} key={index} index={0}>{item}</Item>)}
    </CorpoLista>
  )
}

export default ListaItem
