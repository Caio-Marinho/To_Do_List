import React from 'react'

type PropsBotao = {
  aoClicar:(e: React.MouseEvent<HTMLButtonElement>) => void
}
const Botao = ({aoClicar}:PropsBotao) => {
  return (
    <button onClick={aoClicar} type="submit">Cadastrar</button>
  )
}

export default Botao
