import { InputProps } from './types'

export const Input = ({ id, type }: InputProps) => (
  <input
    className="py-2 px-4 border-2 focus:border-blue-500 rounded outline-none"
    id={id}
    type={type}
  />
)
