import { createContext, useState } from 'react'
import { ModalContextProviderProps, ModalContextType } from './types'

export const ModalContext = createContext<ModalContextType>(undefined)
ModalContext.displayName = 'ModalContext'

export const ModalProvider = ({ children }: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ModalContext.Provider>
  )
}
