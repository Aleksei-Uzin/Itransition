import { LoginForm, LoginFormParamsType } from '../LoginForm'
import { Modal, ModalOpenButton, ModalProvider } from '../Modal'
import { Button } from '../Button'
import { addUser, authRegister } from '../../api'
import { UnauthenticatedAppProps } from './types'

export const UnauthenticatedApp = ({ setUser }: UnauthenticatedAppProps) => {
  const login = async ({ email, password }: LoginFormParamsType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userCredential = await authRegister({ email, password })
    // TODO: setting up username
    setUser('mr. John')
  }

  const register = async ({ email, name, password }: LoginFormParamsType) => {
    const userCredential = await authRegister({ email, password })
    const { creationTime = Date(), lastSignInTime = Date() } =
      userCredential.user.metadata

    addUser({ name, email, creationTime, lastSignInTime, status: true })
    setUser(name)
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
            <LoginForm onSubmit={login} />
          </Modal>
        </ModalProvider>
        <ModalProvider>
          <ModalOpenButton>
            <Button>Register</Button>
          </ModalOpenButton>
          <Modal title="Register">
            <LoginForm type="register" onSubmit={register} />
          </Modal>
        </ModalProvider>
      </div>
    </div>
  )
}
