import { cloneElement } from 'react'
import { useModal } from './useModal'
import { ModalOpenButtonProps } from './types'

export const ModalOpenButton = ({ children: child }: ModalOpenButtonProps) => {
  const [, setIsOpen] = useModal()

  return cloneElement(child, {
    onClick: () => setIsOpen(true),
  })
}
