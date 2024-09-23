import { User } from 'firebase/auth'
import { STATUS } from '../../api'

export type UnauthenticatedAppProps = {
  setUser: (username: User) => void
}

export interface State {
  status: STATUS
  error?: string
}
