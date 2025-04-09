import React from 'react'
import Botao from './Botao'
import InputTexto from './InputTexto'

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
      <form onSubmit={handleOnSubmit}>
        <InputTexto  atualizarTarefa={atualizar} newTask={Task} />
        <Botao aoClicar={onAdd} />
      </form>
    </div>
  )
}

export default Formulario
