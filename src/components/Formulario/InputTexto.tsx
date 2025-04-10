import React from 'react'
import style from './Formulario.module.css'

type TaskInputProps = {
    newTask: string;
    atualizarTarefa: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

const InputTexto = ({newTask, atualizarTarefa}:TaskInputProps) => {
  return (
    <input type="text" placeholder="Nova tarefa"
    value={newTask}
    onChange={atualizarTarefa}
    className={style.input}
    maxLength={40}
    />
  )
}

export default InputTexto
