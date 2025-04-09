import React from 'react'

type TaskInputProps = {
    newTask: string;
    atualizarTarefa: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

const InputTexto = ({newTask, atualizarTarefa}:TaskInputProps) => {
  return (
    <input type="text" placeholder="Nova tarefa"
    value={newTask}
    onChange={atualizarTarefa}/>
  )
}

export default InputTexto
