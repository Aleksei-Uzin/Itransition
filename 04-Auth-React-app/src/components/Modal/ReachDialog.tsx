import { Dialog, DialogProps } from '@reach/dialog'
import { useModal } from './useModal'

export const ReachDialog = (props: DialogProps) => {
  const [isOpen, setIsOpen] = useModal()

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}
