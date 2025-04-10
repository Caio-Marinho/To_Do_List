import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListaItem from './components/Lista'
import { useTarefas } from './hooks/useTarefas';

function App() {
  const {
    tarefas,
    adicionarTarefa,
    removerTarefa,
    marcarSelecionado,
    excluirSelecionados
  } = useTarefas();

  const [tarefa, setTarefa] = useState('')

  const onAdd = () => {
    if (tarefa.trim() !== '') {
      adicionarTarefa(tarefa);
      setTarefa('');
    }
  }

  const totalTarefas = tarefas.length;
  const selecionados = tarefas.filter(t => t.selecionado).length;
  const todosSelecionados = selecionados === totalTarefas;

  return (
    <>
      <h2>Gerenciador de tarefas</h2>
      <Formulario atualizar={(e) => setTarefa(e.target.value)} Task={tarefa} onAdd={onAdd} />
      <ListaItem remover={removerTarefa} Lista={tarefas} alternarSelecionado={marcarSelecionado} />
      
      {selecionados > 1 && (
        <button onClick={excluirSelecionados}>
          Excluir {todosSelecionados ? 'todos' : selecionados} Selecionados
        </button>
      )}
    </>
  )
}

export default App
