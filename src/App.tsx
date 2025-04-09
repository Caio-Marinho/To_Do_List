import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListaItem from './components/Lista'

function App() {
  const [listatarefa, setListaTarefa] = useState<string[]>([])
  const [tarefa, setTarefa] = useState('')

  const onAdd = () => {
    if (tarefa.trim() !== '') {
      setListaTarefa(listatarefa => [...listatarefa, tarefa])
      setTarefa('')
    }
  }

  const removerTarefa = (indice: number) => {
    const novaLista = listatarefa.filter((_, i) => i !== indice);
    setListaTarefa(novaLista);
  };

  return (
    <>
      <Formulario atualizar={(e) => setTarefa(e.target.value)} Task={tarefa} onAdd={onAdd} />
      <ListaItem remover={removerTarefa} Lista={listatarefa} />
    </>
  )
}

export default App
