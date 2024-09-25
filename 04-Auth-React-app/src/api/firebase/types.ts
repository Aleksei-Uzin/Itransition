import { RegisterFormParams } from '../../components/LoginForm'

export type AuthRegisterParamsType = Omit<RegisterFormParams, 'name'>
