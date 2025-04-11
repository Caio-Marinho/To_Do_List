import React from 'react'
import Botao from './Botao'
import InputTexto from './InputTexto'
import style from './Formulario.module.css'

type TaskProps = {
  Task: string;
  atualizar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Formulario = ({ Task, atualizar, onAdd }:TaskProps) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <form data-netlify="true"  className={style.formContainer} onSubmit={handleOnSubmit}>
        <InputTexto  atualizarTarefa={atualizar} newTask={Task} />
        <Botao tarefa={Task} aoClicar={onAdd} />
      </form>
    </div>
  )
}

export default Formulario
