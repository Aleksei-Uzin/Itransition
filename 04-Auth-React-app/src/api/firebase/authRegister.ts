import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AuthRegisterParamsType } from './types'
import { auth } from './firebase'

export const authRegister = ({ email, password }: AuthRegisterParamsType) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    userCredential => userCredential.user
  )
