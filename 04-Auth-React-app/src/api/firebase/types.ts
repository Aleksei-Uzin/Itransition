import { LoginFormParamsType } from '../../components/LoginForm'

export type AuthRegisterParamsType = Omit<LoginFormParamsType, 'name'>
