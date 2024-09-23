import { useEffect, useState } from 'react'
import {
  AuthenticatedApp,
  FullPageSpinner,
  UnauthenticatedApp,
} from './components'
import { auth, STATUS } from './api'
import { onAuthStateChanged, User } from 'firebase/auth'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE)
  const handleSetUser = (newUser: User | null) => setUser(newUser)

  useEffect(() => {
    onAuthStateChanged(auth, signedUser => {
      setUser(signedUser)
      setStatus(STATUS.RESOLVED)
    })
  }, [])

  if (status === STATUS.IDLE || status === STATUS.PENDING) {
    return <FullPageSpinner />
  }

  if (status === STATUS.RESOLVED) {
    return user ? (
      <AuthenticatedApp user={user} />
    ) : (
      <UnauthenticatedApp setUser={handleSetUser} />
    )
  }
}

export default App
