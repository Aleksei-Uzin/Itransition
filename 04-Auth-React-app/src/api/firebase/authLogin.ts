import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthRegisterParamsType } from './types'
import { auth } from './firebase'

export const authLogin = ({ email, password }: AuthRegisterParamsType) =>
  signInWithEmailAndPassword(auth, email, password).then(
    userCredential => userCredential.user
  )
