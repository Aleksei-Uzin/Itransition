import { ProcessedUser, STATUS } from '../../api'

export interface State {
  status: STATUS
  rows?: ProcessedUser[]
}
