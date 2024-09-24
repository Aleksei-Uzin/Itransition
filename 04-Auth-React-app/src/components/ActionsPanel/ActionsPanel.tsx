import { useState } from 'react'
import { auth, deleteUser, updateUserStatus } from '../../api'
import { Button } from '../Button'
import { ActionsPanelProps, ActionType } from './types'
import { signOut } from 'firebase/auth'
import { IconLock, IconTrash, IconUnclock } from '../Icons'

export const ActionsPanel = ({
  isSelected,
  selectedUsers,
  setStatus,
}: ActionsPanelProps) => {
  const [action, setAction] = useState<ActionType>(null)
  const disabled = !selectedUsers.length

  const handleBlock = async () => {
    setAction('block')
    await Promise.all(
      selectedUsers.map(user => updateUserStatus(user.id, user.authUID, false))
    )

    if (isSelected) {
      signOut(auth)
    }

    setAction(null)
    setStatus()
  }

  const handleUnblock = async () => {
    setAction('unblock')
    await Promise.all(
      selectedUsers.map(user => updateUserStatus(user.id, user.authUID, true))
    )
    setAction(null)
    setStatus()
  }

  const handleDelete = async () => {
    setAction('delete')
    await Promise.all(
      selectedUsers.map(({ id, authUID }) => deleteUser(id, authUID))
    )

    if (isSelected) {
      signOut(auth)
    }

    setAction(null)
    setStatus()
  }

  return (
    <div className="flex justify-center gap-4 px-12 py-6">
      <Button
        color={disabled ? 'secondary' : 'alert'}
        disabled={disabled}
        isLoading={action === 'block'}
        onClick={handleBlock}
      >
        Block
        <IconLock />
      </Button>
      <Button
        color={disabled ? 'secondary' : 'primary'}
        disabled={disabled}
        isLoading={action === 'unblock'}
        onClick={handleUnblock}
      >
        Unblock
        <IconUnclock />
      </Button>
      <Button
        color={disabled ? 'secondary' : 'alert'}
        disabled={disabled}
        isLoading={action === 'delete'}
        onClick={handleDelete}
      >
        Delete
        <IconTrash />
      </Button>
    </div>
  )
}
