import React from 'react'
import style from './Lista.module.css'

const CorpoLista = ({children}:React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={style.listaAtividades}>
      {children}
    </ul>
  )
}

export default CorpoLista
