import { Tarefa } from '../../types/Tarefa';
import CorpoLista from './CorpoLista'
import Item from './Item'

type PropsLista = {
  Lista: Tarefa[];
  remover: (indice: string) => void;
  alternarSelecionado: (id: string) => void;
}

const ListaItem = ({ Lista, remover, alternarSelecionado }: PropsLista) => {
  return (
    <CorpoLista>
      {Lista.map((item) =>
        <>
          <Item
            alternarSelecionado={alternarSelecionado}
            selecionado={item.selecionado}
            titulo={item.titulo}
            removerTarefa={remover}
            key={item.id}
            index={item.id}>
            ID: {item.id}
            <br />
            Titulo: {item.titulo}
            <br/>
            Estado: {item.selecionado  ? 'Verdadeiro' : 'Falso'}
          </Item>
        </>
      )
      }
    </CorpoLista>
  )
}

export default ListaItem
