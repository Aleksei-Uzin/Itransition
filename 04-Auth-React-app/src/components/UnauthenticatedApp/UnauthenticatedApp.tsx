import { useState } from 'react'
import { LoginForm, LoginFormParams, RegisterFormParams } from '../LoginForm'
import { Modal, ModalOpenButton, ModalProvider } from '../Modal'
import { Button } from '../Button'
import {
  addUser,
  auth,
  authLogin,
  authRegister,
  STATUS,
  updateUserTime,
} from '../../api'
import { State, UnauthenticatedAppProps } from './types'
import { updateProfile } from 'firebase/auth'
import { getCurrDateAndTime } from './utils'

export const UnauthenticatedApp = ({ setUser }: UnauthenticatedAppProps) => {
  const [state, setState] = useState<State>({
    status: STATUS.IDLE,
  })
  const { status, error } = state
  const isLoading = status === STATUS.PENDING

  const login = async ({ email, password }: LoginFormParams) => {
    setState({ status: STATUS.PENDING })

    try {
      await Promise.all([
        authLogin({ email, password }),
        updateUserTime(email, getCurrDateAndTime()),
      ])
      setState({ status: STATUS.RESOLVED })
    } catch (error) {
      setState({ status: STATUS.REJECTED, error: (error as Error).message })
    }
  }

  const register = async ({ email, password, name }: RegisterFormParams) => {
    setState({ status: STATUS.PENDING })

    try {
      const newUser = await authRegister({ email, password })
      const currTime = getCurrDateAndTime()
      await Promise.all([
        updateProfile(auth.currentUser!, {
          displayName: name,
        }),
        addUser({
          authUID: newUser.uid,
          creationTime: currTime,
          email,
          lastSignInTime: currTime,
          name,
          status: true,
        }),
      ])
      setUser({ ...newUser, displayName: name })
      setState({ status: STATUS.RESOLVED })
    } catch (error) {
      setState({ status: STATUS.REJECTED, error: (error as Error).message })
    }
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
            <LoginForm isLoading={isLoading} error={error} onSubmit={login} />
          </Modal>
        </ModalProvider>
        <ModalProvider>
          <ModalOpenButton>
            <Button>Register</Button>
          </ModalOpenButton>
          <Modal title="Register">
            <LoginForm
              isLoading={isLoading}
              error={error}
              type="register"
              onSubmit={register}
            />
          </Modal>
        </ModalProvider>
      </div>
    </div>
  )
}
