import React from 'react'

const CorpoLista = ({children}:React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul>
      {children}
    </ul>
  )
}

export default CorpoLista
