import { ProcessedUser } from '../../api'

export type ActionsPanelProps = {
  isSelected: boolean
  selectedUsers: ProcessedUser[]
  setStatus: () => void
}

export type ActionType = 'block' | 'unblock' | 'delete' | null
