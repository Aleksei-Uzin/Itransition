import { Button } from '../Button'
import { FormGroup } from './FormGroup'
import { Input } from './Input'
import { LoginFormProps } from './types'

export const LoginForm = ({
  isLoading,
  error,
  onSubmit,
  type = 'login',
}: LoginFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // @ts-ignore
    const { email, name, password } = (event.target as HTMLFormElement).elements

    onSubmit({
      email: email.value,
      password: password.value,
      name: name?.value,
    })
  }

  return (
    <form className="flex flex-col items-stretch gap-4" onSubmit={handleSubmit}>
      {type === 'register' && (
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input id="name" type="text" />
        </FormGroup>
      )}
      <FormGroup>
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      {error && <div className="text-red-500">{error}</div>}
      <div className="mt-4">
        <Button isLoading={isLoading}>Submit</Button>
      </div>
    </form>
  )
}
