import { ReachDialog } from './ReachDialog'
import { ModalCloseButton } from './ModalCloseButton'
import { Button } from '../Button'
import { ModalProps } from './types'

export const Modal = ({ children, title }: ModalProps) => {
  return (
    <ReachDialog>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <ModalCloseButton>
          <Button>X</Button>
        </ModalCloseButton>
      </div>
      {children}
    </ReachDialog>
  )
}
