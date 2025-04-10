import React from 'react';
import style from './Formulario.module.css'

type PropsBotao = {
  aoClicar:(e: React.MouseEvent<HTMLButtonElement>) => void
  tarefa: string
}
const Botao = ({aoClicar, tarefa}:PropsBotao) => {
  return (
    <button 
    className={style.botao} 
    onClick={aoClicar} 
    type="submit" disabled={!tarefa.trim()}>Cadastrar</button>
  )
}

export default Botao
