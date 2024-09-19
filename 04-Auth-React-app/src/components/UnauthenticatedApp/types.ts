import { User } from 'firebase/auth'

export type UnauthenticatedAppProps = {
  setUser: (username: User) => void
}
