export interface LoginFormParams {
  email: string
  password: string
}

export interface RegisterFormParams extends LoginFormParams {
  name: string
}

export type LoginFormProps = {
  isLoading: boolean
  error?: string
  type?: 'login' | 'register'
  onSubmit(params: LoginFormParams): void
  onSubmit(params: RegisterFormParams): void
}

export type InputProps = {
  id: string
  type: 'email' | 'password' | 'text'
}
