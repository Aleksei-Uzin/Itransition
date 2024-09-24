import { signOut } from 'firebase/auth'
import { Button } from '../Button'
import { Spinner } from '../Spinner'
import { AuthenticatedAppProps } from './types'
import { auth } from '../../api'
import { Table } from '../Table'

export const AuthenticatedApp = ({ user }: AuthenticatedAppProps) => {
  const { displayName: name } = user
  const logout = () => signOut(auth)

  return (
    <>
      <div className="flex justify-center items-center gap-4 px-10 py-4">
        <span className="text-xl font-semibold">
          Welcome {!name ? <Spinner /> : name}
        </span>
        <Button onClick={logout}>Logout</Button>
      </div>
      <Table />
    </>
  )
}
