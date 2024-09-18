export interface LoginFormParamsType {
  email: string
  password: string
}

export type LoginFormProps = {
  onSubmit: ({ email, password }: LoginFormParamsType) => void
}

export type InputProps = {
  id: string
  type: 'email' | 'password'
}
