import { Button } from '../Button'
import { FormGroup } from './FormGroup'
import { Input } from './Input'
import { LoginFormProps } from './types'

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // @ts-ignore
    const { email, password } = (event.target as HTMLFormElement).elements

    onSubmit({
      email: email.value,
      password: password.value,
    })
  }
  return (
    <form className="flex flex-col items-stretch gap-4" onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div className="mt-4">
        <Button>Submit</Button>
      </div>
    </form>
  )
}
