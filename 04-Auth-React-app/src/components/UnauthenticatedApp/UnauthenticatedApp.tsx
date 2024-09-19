import { useState } from 'react'
import { LoginForm, LoginFormParamsType } from '../LoginForm'
import { Modal, ModalOpenButton, ModalProvider } from '../Modal'
import { Button } from '../Button'
import { addUser, auth, authLogin, authRegister, STATUS } from '../../api'
import { UnauthenticatedAppProps } from './types'
import { updateProfile } from 'firebase/auth'

export const UnauthenticatedApp = ({ setUser }: UnauthenticatedAppProps) => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE)
  const isLoading = status === STATUS.PENDING

  const login = async ({ email, password }: LoginFormParamsType) => {
    setStatus(STATUS.PENDING)
    const userCredential = await authLogin({ email, password })
    setUser(userCredential.user)
    setStatus(STATUS.RESOLVED)
  }

  const register = async ({ email, name, password }: LoginFormParamsType) => {
    setStatus(STATUS.PENDING)
    const { user } = await authRegister({ email, password })
    await updateProfile(auth.currentUser!, {
      displayName: name,
    })
    const { creationTime = Date(), lastSignInTime = Date() } = user.metadata

    addUser({
      name,
      email,
      creationTime,
      lastSignInTime,
      status: true,
    })
    setUser({ ...user, displayName: name })
    setStatus(STATUS.RESOLVED)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-5 w-full h-screen">
      <h1>Itransition Authentication app</h1>
      <div className="grid grid-cols-2 gap-6 w-80">
        <ModalProvider>
          <ModalOpenButton>
            <Button>Login</Button>
          </ModalOpenButton>
          <Modal title="Login">
            <LoginForm isLoading={isLoading} onSubmit={login} />
          </Modal>
        </ModalProvider>
        <ModalProvider>
          <ModalOpenButton>
            <Button>Register</Button>
          </ModalOpenButton>
          <Modal title="Register">
            <LoginForm
              isLoading={isLoading}
              type="register"
              onSubmit={register}
            />
          </Modal>
        </ModalProvider>
      </div>
    </div>
  )
}
