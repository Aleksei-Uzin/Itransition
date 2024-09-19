export interface LoginFormParamsType {
  email: string
  name: string
  password: string
}

export type LoginFormProps = {
  isLoading: boolean
  type?: 'login' | 'register'
  onSubmit: ({ email, password }: LoginFormParamsType) => void
}

export type InputProps = {
  id: string
  type: 'email' | 'password' | 'text'
}
