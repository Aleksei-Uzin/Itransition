import { cloneElement } from 'react'
import { useModal } from './useModal'
import { ModalCloseButtonProps } from './types'

export const ModalCloseButton = ({
  children: child,
}: ModalCloseButtonProps) => {
  const [, setIsOpen] = useModal()

  return cloneElement(child, {
    onClick: () => setIsOpen(false),
  })
}
