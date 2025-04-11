import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tarefa } from '../types/Tarefa';

export function useTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [selecionado, setSelecionado] = useState<boolean>(false);

  useEffect(() => {
    axios.get('http://localhost:3001/tarefas')
      .then((res) => {
        const tarefasComSelecionado = res.data.map((t: Tarefa) => ({
          ...t,
          selecionado: t.selecionado ?? false,
        }));
        setTarefas(tarefasComSelecionado);
      })
      .catch((err) => console.error('Erro ao buscar tarefas:', err))
      .finally(() => setCarregando(false));
    
  }, [tarefas]);

  const adicionarTarefa = async (titulo: string) => {
    if (titulo.trim() === '') return;
    try {
      const res = await axios.post('http://localhost:3001/tarefas', {
        titulo: titulo,
      });
      setTarefas(prev => [...prev, res.data]);
    } catch (err) {
      console.error('Erro ao adicionar tarefa:', err);
    }
  };

  const removerTarefa = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/tarefas/${id}`);
      setTarefas(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error('Erro ao remover tarefa:', err);
    }
  };

  const atualizarTarefa = async (id: string, titulo: string, selecionado: boolean) => {
    try {
      const res = await axios.put(`http://localhost:3001/tarefas/${id}`, {
        id:id,
        titulo: titulo,
        ...(selecionado && { selecionado: selecionado }),
      });
      setTarefas((prev) =>
        prev.map((tarefa) => (tarefa.id === id ? res.data : tarefa))
      );
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err);
    }
  };

  const atualizarDescricao = async (id: string, descricao: string) => {
    try {
      const res = await axios.put(`http://localhost:3001/tarefas/${id}`, {
        descricao: descricao
      });
      setTarefas((prev) =>
        prev.map((tarefa) => (tarefa.id === id ? res.data : tarefa))
      );
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err);
    }
  };



  const marcarSelecionado = (id: string) => {
    setTarefas(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selecionado: !item.selecionado } : item
      )
    );
  
    const tarefa = tarefas.find(item => item.id === id);
    if (tarefa) {
      setSelecionado(!tarefa.selecionado);
      atualizarTarefa(id, tarefa.titulo, !tarefa.selecionado);
    }
  };


  const excluirSelecionados = async () => {
    const selecionados = tarefas.filter(t => t.selecionado);
    try {
      await Promise.all(selecionados.map(t =>
        axios.delete(`http://localhost:3001/tarefas/${t.id}`)
      ));
      setTarefas(prev => prev.filter(t => !t.selecionado));
    } catch (err) {
      console.error('Erro ao excluir tarefas selecionadas:', err);
    }
  };

  return {
    selecionado,
    tarefas,
    carregando,
    atualizarDescricao,
    adicionarTarefa,
    removerTarefa,
    marcarSelecionado,
    excluirSelecionados
  };
}
